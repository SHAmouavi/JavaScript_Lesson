const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];
  let duration = mondayTasks.map(mondayTasks => mondayTasks.duration);
  let per_hour = 25;
  let per_manye = duration.map(duration => duration / 60 * 25);
  console.log(per_manye);
 