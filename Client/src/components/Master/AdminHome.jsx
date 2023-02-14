import React from "react";
import ApprovalList from "./ApprovalList";
import TaskList from "./TaskList";

const AdminHome = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-12">
            <TaskList />
            <ApprovalList />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHome;
