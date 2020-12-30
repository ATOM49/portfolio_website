import React, { useEffect } from 'react';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import { useProjectActions } from 'app/actions';

// import { useProjectActions, ProjectActions } from 'app/actions';
import { Header } from 'app/components/Header';
import { Project } from 'app/components/Project';
import { Project as ProjectModel } from 'app/models';

export namespace Projects {
  export interface Props extends RouteComponentProps<{ id?: string }> { }
}
export interface CardData {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
}


export const Projects = ({ match, history, location }: Projects.Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(history, location);
  const projectActions = useProjectActions(dispatch);
  // const { loading, projects } = useSelector((state: RootState) => {
  //   return {
  //     loading: state.projects?.loading,
  //     projects: state.projects?.projects
  //   };
  // });
  const loading = false;
  const projects: ProjectModel[] = [
    {
      id: 1,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 2,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 3,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 4,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 5,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 6,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 7,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: 8,
      skills: [{ name: "Pizza", type: 'Dev' }],
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2ba7b762896715.5a9f2bae4d16e.png",
      title: "5 Food Apps Delivering the Best of Your City",
      content: "Yo yo this is the project",
      primaryRole: "Developer",
      company: {
        id: 2,
        name: "Playment",
        description: "Good place AI etc",
        logoUrl: "https://image.shutterstock.com/image-vector/stripes-dots-circle-logo-vector-260nw-1139400776.jpg",
        startDate: new Date('12-12-2015'),
        endDate: new Date('12-12-2015'),
        linkUrl: "www.playment.io"
      },
      startDate: new Date('12-12-2015'),
      endDate: new Date('12-12-2015'),
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    }
  ];

  console.log(projects);
  useEffect(() => {
    projectActions.fetchProjects();
  }, [projectActions.fetchProjects]);
  //TODO: Move the header outside the component and have common header for projects and about me
  return (
    <Box className={classes.content}>
      <Header activeProject={undefined} />
      {loading ? (
        <CircularProgress />
      ) :
        <Container className={classes.content}>
          <ul className={classes.cardList}>
            {projects.map(project => (
              <Project
                key={project.id}
                isSelected={match.params.id === project.id.toString()}
                history={history}
                {...project}
              />
            ))}
          </ul>
        </Container>
      }
    </Box>

  );
};
