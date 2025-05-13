import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink> 
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Arnold Elamthuruthil</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        <div className="bg-primary-foreground p-4 rounded-lg">

        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">

        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">

        </div>
      </div>
    </div>
      
  );
};

export default SingleUserPage