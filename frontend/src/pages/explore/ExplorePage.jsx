import { TicketFilterSidebar } from './ExploreSidebar';
import Project from './Project';

const config = {

}

const projects = [];

const tickets = [];

function ExplorePage() {

    //const projects = [];

    return (
        <div className="ta-explorepage flex flex-1 m-6">
            <TicketFilterSidebar extraclasses={"w-1/6"} />
            <div className='w-5/6 h-screen bg-red-200'>
                {
                    projects.map(project => <Project>{project.data}</Project> )
                }
            </div>
        </div>
    );
}

export default ExplorePage;