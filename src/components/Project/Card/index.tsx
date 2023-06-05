import React from "react";
import Image from "next/image";
import { styled } from "styled-components";

import Link from "@/components/Link";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className,
}: ProjectCardProps) => {
  return (
    <Container className={className}>
      <Header>
        <div>
          <Link href={project.url}>
            <Title>{project.name}</Title>
          </Link>
          <Type>{project.type}</Type>
        </div>
        <Icon src={project.iconUrl} alt={project.name} width={50} height={50} />
      </Header>

      <Sections>
        <SectionContainer>
          <SectionTitle>Role</SectionTitle>
          <Text>{project.role}</Text>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Description</SectionTitle>
          <Text>{project.description}</Text>
        </SectionContainer>
      </Sections>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.elements.border};
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.elements.border};
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Type = styled.span`
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Icon = styled(Image)`
  border-radius: 100%;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.div`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.size.normal};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default ProjectCard;
