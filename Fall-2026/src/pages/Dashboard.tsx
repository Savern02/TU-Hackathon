import { PageHeader, PageHeaderHeading, PageHeaderDescription} from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>We Are Reality Check</PageHeaderHeading>
                <PageHeaderDescription> Reality Check is here to save you from 2030, where in this age, it is unkown what is real or fake. Find out today. </PageHeaderDescription>
            </PageHeader>

            <p> </p>
            <PageHeaderHeading> Core Features & Functionality </PageHeaderHeading> 
            <Card>
                <CardHeader>
                    <CardTitle>Real-Time Deepfake Screening</CardTitle>
                    <CardDescription>The app monitors live video and audio streams (such as Zoom or Teams calls) to detect signs of synthetic manipulation.
Visual Forensics: Analyzes pixel-level inconsistencies, irregular blinking patterns, and "ghosting" artifacts around facial features that indicate a face-swap.
Acoustic Analysis: Scans voice feeds for the "robotic" signatures and frequency anomalies characteristic of AI-cloned voices. </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>"Crisis Mode": Viral Content Detection </CardTitle>
                    <CardDescription>When a piece of media begins to spread rapidly across social platforms, the app's Crisis Mode kicks in to provide immediate context.
Early Warning System: Flags high-risk content related to elections, public health, or financial markets.
Truth Score: Assigns a "Trust Score" to viral clips based on cross-referenced data and forensic metadata.</CardDescription>
                </CardHeader>
            </Card>

              <Card>
                <CardHeader>
                    <CardTitle>C2PA & Provenance Tracking </CardTitle>
                    <CardDescription>The app monitors live video and audio streams (such as Zoom or Teams calls) to detect signs of synthetic manipulation.
Visual Forensics: Analyzes pixel-level inconsistencies, irregular blinking patterns, and "ghosting" artifacts around facial features that indicate a face-swap.
Acoustic Analysis: Scans voice feeds for the "robotic" signatures and frequency anomalies characteristic of AI-cloned voices. </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Who Is It For?</CardTitle>
                    <CardDescription>The app monitors live video and audio streams (such as Zoom or Teams calls) to detect signs of synthetic manipulation.
Visual Forensics: Analyzes pixel-level inconsistencies, irregular blinking patterns, and "ghosting" artifacts around facial features that indicate a face-swap.
Acoustic Analysis: Scans voice feeds for the "robotic" signatures and frequency anomalies characteristic of AI-cloned voices. </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
