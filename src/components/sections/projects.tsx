"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projects
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <Modall key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  // Determine which specific image to show based on project ID
  let specificImageSrc = "";
  if (project.id === "tutien") {
    specificImageSrc = "/assets/projects-screenshots/TuTien/project_1.png";
  } else if (project.id === "metaball") {
    specificImageSrc = "/assets/projects-screenshots/Metaball/project_2.png";
  } else if (project.id === "chatbot") {
    specificImageSrc = "/assets/projects-screenshots/Chatbot/project_3.png";
  }

  return React.createElement(
    React.Fragment,
    null,
    // Project Name
    React.createElement(
      "h4",
      { className: "text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8" },
      project.title
    ),
    // Specific Project Image
    React.createElement(
      "div",
      { className: "flex justify-center mb-8" },
      React.createElement("img", {
        src: specificImageSrc,
        alt: project.title,
        className: "rounded-lg object-cover max-w-full h-auto",
        style: { maxHeight: "300px" }
      })
    ),
    // Project Link
    React.createElement(
      "div",
      { className: "flex justify-center" },
      React.createElement(
        "a",
        { 
          href: project.live, 
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
        },
        "Visit Project"
      )
    )
  );
};
