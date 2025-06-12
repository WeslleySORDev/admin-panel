interface Activity {
  action: string
  item: string
  time: string
}

interface ActivityListProps {
  activities: Activity[]
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center justify-between">
          <div>
            <p className="font-medium">{activity.action}</p>
            <p className="text-sm text-muted-foreground">{activity.item}</p>
          </div>
          <div className="text-sm text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
