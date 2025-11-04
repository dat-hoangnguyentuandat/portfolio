// Projects section - displaying only project name, one image, and link
import projects from "../../data/projects";

function ProjectsSection() {
  // Simple functional component that displays the three requested items:
  // 1. Project name
  // 2. One image of the project
  // 3. Link to the project
  
  return {
    $$typeof: Symbol.for('react.element'),
    type: 'section',
    key: null,
    ref: null,
    props: {
      id: 'projects',
      children: [
        {
          $$typeof: Symbol.for('react.element'),
          type: 'h2',
          key: null,
          ref: null,
          props: {
            children: 'Projects'
          }
        },
        {
          $$typeof: Symbol.for('react.element'),
          type: 'div',
          key: null,
          ref: null,
          props: {
            className: 'grid grid-cols-1 md:grid-cols-3 gap-8',
            children: projects.map(project => ({
              $$typeof: Symbol.for('react.element'),
              type: 'div',
              key: project.id,
              ref: null,
              props: {
                className: 'project-card',
                children: [
                  // 1. Project name
                  {
                    $$typeof: Symbol.for('react.element'),
                    type: 'h3',
                    key: null,
                    ref: null,
                    props: {
                      className: 'project-title',
                      children: project.title
                    }
                  },
                  // 2. One image of the project
                  {
                    $$typeof: Symbol.for('react.element'),
                    type: 'img',
                    key: null,
                    ref: null,
                    props: {
                      src: project.src,
                      alt: project.title,
                      className: 'project-image'
                    }
                  },
                  // 3. Link to the project
                  {
                    $$typeof: Symbol.for('react.element'),
                    type: 'a',
                    key: null,
                    ref: null,
                    props: {
                      href: project.live,
                      target: '_blank',
                      className: 'project-link',
                      children: 'Visit Project'
                    }
                  }
                ]
              }
            }))
          }
        }
      ]
    }
  };
}

export default ProjectsSection;