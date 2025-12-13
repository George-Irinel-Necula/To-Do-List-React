import { Button, Card, Checkbox, Chip } from "@heroui/react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function Task({ title, description, date,id,deleteTask,editTask,checked,updateStatus}) {
  return (
    <Card className="bg-default-100">
      <div className="flex">
        <div className="border-3 border-secondary"></div>
        <div className="flex p-6 w-full">
          <div>
            <Checkbox onChange={()=>updateStatus(id,checked)} size="lg" className="mt-0 mr-1" color="secondary"/>
          </div>

          <div className="h-auto text-wrap w-full">
            <h1 className="text-xl font-bold mb-1">{title}</h1>
            <p>{description}</p>
            <div className="flex flex-col sm:flex-row mt-4 gap-2">
              <Chip color="secondary" variant="flat">
                Date created: {date}
              </Chip>
              <h1 className="hidden sm:inline">•</h1>
              <Chip color={checked?"success":"warning"} variant="flat">
                Status: {checked?"Completed":"Pending"}
              </Chip>
            </div>
          </div>

          <div className="px-2 flex gap-2 flex-col">
            <Button isIconOnly onClick={()=>deleteTask(id)} startContent={<IconTrash />} />
            <Button isIconOnly onClick={()=>editTask(id,title,description,checked)} startContent={<IconEdit />} />
          </div>
        </div>
      </div>
    </Card>
  );
}
