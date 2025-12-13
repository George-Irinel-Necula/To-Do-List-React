import { useEffect, useState } from "react";
import "./App.css";
import {
  HeroUIProvider,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Badge,
  Chip,
  Divider,
  Card,
} from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import {
  IconChevronDown,
  IconBrandLinkedin,
  IconChevronRight,
  IconCheckbox,
  IconRosetteDiscountCheck,
  IconRosetteDiscountCheckFilled,
  IconCircle,
  IconCircleCheck,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Task from "./Task";

function App() {
  const [task, setTask] = useState([]);
  function deleteTask(id){
    let taskCopy=[...task]
    taskCopy=taskCopy.filter(item => item.id!=id)
    setTask(taskCopy)
  }

  function autoIncrement(){
    let taskCopy=[...task]
    let max=0
    for(let i=0;i<taskCopy.length;i++){
      if(taskCopy[i].id>=max)
        max=taskCopy[i].id+1
    }
    return max
  }

  function setDate(){
    const date=new Date()
    const dateString=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
    return dateString
  }

  function addTask(title,description){
    console.log(title+" "+description)
    let taskCopy=[...task]
    taskCopy.push({id:autoIncrement(),title:title,description:description,date:setDate(),checked:false})
    setTask(taskCopy)
  }
  function updateStatus(id,checked){
    let taskCopy=[...task]
    for(let i=0;i<taskCopy.length;i++){
      if(taskCopy[i].id==id)
        taskCopy[i].checked=!taskCopy[i].checked
    }
    setTask(taskCopy)
  }
  useEffect(()=>{console.log(task)},[task])

  return (
    <>
      <HeroUIProvider>
        <Navbar>
          <NavbarBrand>
            <div className="flex items-center gap-4">
              <p className="font-bold text-xl">&lt;GIN/&gt;</p>
              <Divider orientation="vertical" className="h-6 w-0.5"></Divider>
              <h1 className="font-semibold text-xl">To Do List</h1>
            </div>
          </NavbarBrand>
          <NavbarContent justify="end">
            <Dropdown>
              <DropdownTrigger>
                <div className="flex items-center gap-2 font-semibold">
                  <Avatar
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="George Irinel Necula"
                    size="sm"
                    src="./Profile.png"
                  ></Avatar>
                  <div className="cursor-pointer flex items-center gap-1 ">
                    <h1 className="hidden sm:flex">George Irinel Necula</h1>
                    <IconChevronDown size={16} stroke={2} />
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="avatar">
                  <div className="flex items-center gap-2">
                    <Avatar size="lg" src={"./Profile.png"}></Avatar>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-lg font-bold">
                        George Irinel Necula
                      </h1>
                      <Chip size="sm" color="primary">
                        <div className="flex items-center gap-1">
                          <IconCircleCheckFilled
                            size={20}
                          ></IconCircleCheckFilled>
                          <h1>Creator</h1>
                        </div>
                      </Chip>
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItem key="linkedin">
                  <a
                    className="flex items-center gap-2"
                    href="https://www.linkedin.com/in/george-irinel-necula-5a2b78136/"
                  >
                    <IconBrandLinkedin stroke={2} />
                    <h1>My LinkedIn</h1>
                    <IconChevronRight size={16} stroke={2}></IconChevronRight>
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
        <main className="main-container w-full">
          <div className="lg:w-2/4 w-[calc(100%-16px)] mx-auto justify-center py-12 flex flex-col gap-6 ">
            <h1 className="text-5xl font-bold text-center">Your Tasks</h1>
            <p className="text-xl text-center">
              Organize your work and life with this To-Do List. Create tasks,
              set priorities, and track progress.
            </p>
            <AddTask addTask={addTask}></AddTask>
            {task.length!==0?<TaskList className={task.length===0?"hidden":"flex"}>
                {task.map((t) => (
                  <Task
                    key={t.id}
                    id={t.id}
                    title={t.title}
                    description={t.description}
                    date={t.date}
                    checked={t.checked}
                    deleteTask={deleteTask}
                    updateStatus={updateStatus}
                  />
                ))}
              </TaskList>:""}
          </div>
        </main>
      </HeroUIProvider>
    </>
  );
}

export default App;
