import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function OutlinedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <a href="https://onedrive.live.com/view.aspx?resid=9BE6FD84B69C9A6D!1405&cid=9be6fd84b69c9a6d&authkey=!ABepMF8VoHfkCrU&CT=1680470586561&OR=ItemsView" className="text-green-300 hover:text-green-800" 
            target="_blank">Badger 2023</a>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <a href="https://onedrive.live.com/view.aspx?resid=9BE6FD84B69C9A6D!1405&cid=9be6fd84b69c9a6d&authkey=!ABepMF8VoHfkCrU&CT=1680470586561&OR=ItemsView" className="text-gray-700 hover:text-green-800"
          target="_blank">Chilli 2023</a>
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <a href="https://onedrive.live.com/view.aspx?resid=9BE6FD84B69C9A6D!1405&cid=9be6fd84b69c9a6d&authkey=!ABepMF8VoHfkCrU&CT=1680470586561&OR=ItemsView" className="text-gray-700 hover:text-green-800"
          target="_blank">Eastwood 2023</a>
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
          <a href="https://onedrive.live.com/view.aspx?resid=9BE6FD84B69C9A6D!1405&cid=9be6fd84b69c9a6d&authkey=!ABepMF8VoHfkCrU&CT=1680470586561&OR=ItemsView" className="text-gray-700 hover:text-green-800"
          target="_blank">Forest 2023</a>
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
