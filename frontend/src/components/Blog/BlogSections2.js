import React from 'react';
import Introduction from '../BlogSections2/Introduction';
import ProjectSetup from '../BlogSections2/ProjectSetup';
import CoreDataSetup from '../BlogSections2/CoreDataSetup';
import UpdateFunction from '../BlogSections2/UpdateFunction';
import DeleteFunction from '../BlogSections2/DeleteFunction';
import Storyboard from '../BlogSections2/Storyboard';
import EditButton from '../BlogSections2/EditButton';
import DeleteButton from '../BlogSections2/DeleteButton';
import GetAll from '../BlogSections2/GetAll';
import CreateFunction from '../BlogSections2/CreateFunction';
import ViewDidLoad from '../BlogSections2/ViewDidLoad';
import TableViewSetup from '../BlogSections2/TableViewSetup';
import ViewWillAppear from '../BlogSections2/ViewWillAppear';
import AddButton from '../BlogSections2/AddButton';
import PlayButton from '../BlogSections2/PlayButton';
import Demo from '../BlogSections2/Demo';
import TheEnd from '../BlogSections2/TheEnd';

const BlogSections = () => {
  return (
    <div className="section-desc">
      <Introduction />
      <ProjectSetup /> 
      <CoreDataSetup />
      <UpdateFunction />
      <DeleteFunction />
      <Storyboard />
      <EditButton />
      <DeleteButton />
      <GetAll />
      <CreateFunction />
      <ViewDidLoad />
      <TableViewSetup />
      <ViewWillAppear />
      <AddButton />
      <PlayButton />
      <Demo />
      <TheEnd />
    </div>
  );
};
export default BlogSections;
