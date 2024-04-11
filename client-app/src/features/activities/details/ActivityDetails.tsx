import { Card, CardContent, CardHeader, CardMeta, CardDescription, Image, Button } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"

interface Props {
    acitivity: Activity
    cancelSelectActivity: () => void
    openForm: (id: string) => void
}

export default function ActivityDetails({acitivity, cancelSelectActivity, openForm}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${acitivity.category}.jpg`} />
            <CardContent>
                <CardHeader>{acitivity.title}</CardHeader>
                <CardMeta>
                    <span>{acitivity.date}</span>
                </CardMeta>
                <CardDescription>
                    {acitivity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(acitivity.id)} basic color='blue' content='Edit' />
                    <Button 
                        basic 
                        color='grey' 
                        content='Cancel' 
                        onClick={cancelSelectActivity}
                    />
                </Button.Group>
            </CardContent>
        </Card>
    )
}