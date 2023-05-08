import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { DISCORD } from "@/constants/index";
import type { Activity } from "@/types/activity";
import type { APIResponse } from "@/types/api/api-response";

type Data = APIResponse<Activity>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userId } = req.query;

  try {
    const data = await axios.get(
      `https://api.lanyard.rest/v1/users/${
        (userId as string) || DISCORD.USER_ID
      }`
    );

    if (
      data.status === 200 &&
      data.data &&
      data.data.success &&
      data.data.data
    ) {
      const activities: Activity[] = data.data.data.activities.filter(
        (activity: Activity) => [0, 2].includes(activity.type)
      );

      if (activities.length > 0) {
        return res.status(200).json({
          success: true,
          data: activities[activities.length - 1],
        });
      } else {
        return res.status(404).json({
          success: false,
          error: "No activity found.",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Something went wrong.",
    });
  }
}
