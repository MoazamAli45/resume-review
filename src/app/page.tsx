import { Room } from "./Room";
import { PageHome } from "@/components/site/PageHome";
import { Cursors } from "@/components/cursors/Cursors";
import { Comments } from "@/components/comments/Comments";
import ResumeView from "@/components/resume/ResumeView";

export default function Home() {
  return (
    <Room>
      {/* <PageHome /> */}
      <ResumeView />
      <Cursors />
      <Comments />
    </Room>
  );
}
