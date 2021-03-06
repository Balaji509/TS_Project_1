import {Project, ProjectStatus} from '../models/project';

type Listener<T> = (items: T[]) => void;

class State<T> {
    protected listeners: Listener<T>[] = [];
    addListeners(listernerFn: Listener<T>){
        this.listeners.push(listernerFn);
    }

}
    
export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;
    private constructor(){
        super();

    }
    static getInstance() {
        if(this.instance){
            return this.instance;
        }  
           
        this.instance = new ProjectState();
        return this.instance 
    }

    addProject (title: string, description: string, people:number){
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            people,
            ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListener();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find(prj => prj.id === projectId);
        if(project && project.status!== newStatus){
          project.status = newStatus;
          this.updateListener();
        }

    }

    updateListener(){
        for(const listernerFn of this.listeners){
            listernerFn(this.projects.slice());
        }
    }
}

 export const projectState = ProjectState.getInstance();
