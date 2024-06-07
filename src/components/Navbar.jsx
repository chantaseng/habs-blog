import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import habs from '../assets/habs.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-auto py-6 px-8 border-b-[1px] border-slate-100">
      <div className="flex justify-center items-center">
        <img src={habs} className="w-12 h-8 mr-2 cursor-pointer" />
        <h1 className="text-2xl font-bold cursor-pointer">Habs Blog</h1>
      </div>
      <div className="flex items-center text-xl">
        <Breadcrumb className="mr-3 cursor-pointer">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/create" className="cursor-pointer">
              New Blog
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Navbar;
