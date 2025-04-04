import { Calendar, CheckCircle2, Rocket, PencilRuler, Bug, Flag } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      date: 'March 2024',
      title: 'Project Kickoff',
      description: 'Initial project kickoff meeting with stakeholders.',
      icon: CheckCircle2,
      color: 'bg-black',
    },
    {
      date: 'April 2024',
      title: 'Design Phase',
      description: 'Complete UI/UX design and review cycles.',
      icon: PencilRuler,
      color: 'bg-purple-500',
    },
    {
      date: 'May 2024',
      title: 'Development',
      description: 'Begin core development sprints and integration.',
      icon: Calendar,
      color: 'bg-black',
    },
    {
      date: 'July 2024',
      title: 'Testing & QA',
      description: 'Start extensive testing, bug fixes, and quality assurance.',
      icon: Bug,
      color: 'bg-yellow-400',
    },
    {
      date: 'August 2024',
      title: 'Launch',
      description: 'Official launch and deployment.',
      icon: Rocket,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="relative max-w-5xl mx-auto py-24 px-4">
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-black border-dashed"></div>

      {timelineData.map((event, idx) => {
        const IconComponent = event.icon;
        return (
          <div
            key={idx}
            className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16 items-center relative`}
          >
            <div className="w-5/12 relative">
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${idx % 2 === 0 ? '-right-9' : '-left-9'} ${event.color} rounded-full h-14 w-14 flex items-center justify-center shadow-xl border-4 border-white z-20`}
              >
                <IconComponent className="text-white w-7 h-7" />
              </div>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 bg-black rounded-full h-8 w-8 shadow-lg border-2 border-white z-10"
                style={{ [idx % 2 === 0 ? 'right' : 'left']: '-18px' }}
              ></div>
              <div className="bg-white shadow-lg rounded-lg p-6 border border-black">
                <span className="text-sm font-semibold uppercase tracking-wider block mb-2">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold mb-2">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Flag className="text-purple-500 w-12 h-12" />
      </div>
    </div>
  );
};

export default Timeline;
