import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  level: string;
  xp: number;
  locked: boolean;
}

const Index = () => {
  const [playerLevel, setPlayerLevel] = useState(5);
  const [totalXP, setTotalXP] = useState(2450);
  const [streak, setStreak] = useState(7);

  const courses: Course[] = [
    {
      id: 1,
      title: 'Основы Веб-Разработки',
      description: 'Изучите HTML, CSS и JavaScript с нуля',
      progress: 75,
      level: 'Начальный',
      xp: 500,
      locked: false,
    },
    {
      id: 2,
      title: 'React: Интерактивные Интерфейсы',
      description: 'Создавайте динамические веб-приложения',
      progress: 45,
      level: 'Средний',
      xp: 750,
      locked: false,
    },
    {
      id: 3,
      title: 'TypeScript Мастер',
      description: 'Типизированный код для профессионалов',
      progress: 20,
      level: 'Продвинутый',
      xp: 1000,
      locked: false,
    },
    {
      id: 4,
      title: 'Backend с Node.js',
      description: 'Серверная разработка и API',
      progress: 0,
      level: 'Средний',
      xp: 850,
      locked: true,
    },
    {
      id: 5,
      title: 'DevOps & Деплой',
      description: 'CI/CD, Docker, облачные технологии',
      progress: 0,
      level: 'Продвинутый',
      xp: 1200,
      locked: true,
    },
    {
      id: 6,
      title: 'AI & Машинное Обучение',
      description: 'Нейросети и искусственный интеллект',
      progress: 0,
      level: 'Эксперт',
      xp: 1500,
      locked: true,
    },
  ];

  const achievements = [
    { icon: 'Trophy', title: 'Первая Победа', unlocked: true },
    { icon: 'Zap', title: 'Скорострел', unlocked: true },
    { icon: 'Target', title: 'Снайпер', unlocked: true },
    { icon: 'Star', title: 'Легенда', unlocked: false },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Средний':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Продвинутый':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Эксперт':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      
      <div className="absolute top-10 left-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-60 animate-glow-pulse" />
      <div className="absolute top-40 left-40 w-0.5 h-48 bg-gradient-to-b from-primary to-secondary opacity-60 animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-60 left-24 w-0.5 h-40 bg-gradient-to-b from-primary to-secondary opacity-60 animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-80 right-32 w-0.5 h-28 bg-gradient-to-b from-primary to-secondary opacity-60 animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-black text-primary glow-cyan mb-2 tracking-wider animate-slide-in">
                НЕОНОВАЯ АКАДЕМИЯ
              </h1>
              <p className="text-xl text-secondary glow-magenta animate-slide-in" style={{ animationDelay: '0.2s' }}>
                Обучение следующего поколения
              </p>
            </div>
            
            <div className="flex gap-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <Card className="bg-card/80 backdrop-blur-sm border-primary/30 border-glow-cyan p-4">
                <div className="flex items-center gap-3">
                  <Icon name="Gamepad2" className="text-primary" size={32} />
                  <div>
                    <p className="text-xs text-muted-foreground">Уровень</p>
                    <p className="text-2xl font-bold text-primary glow-cyan">{playerLevel}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-sm border-secondary/30 border-glow-magenta p-4">
                <div className="flex items-center gap-3">
                  <Icon name="Sparkles" className="text-secondary" size={32} />
                  <div>
                    <p className="text-xs text-muted-foreground">Опыт</p>
                    <p className="text-2xl font-bold text-secondary glow-magenta">{totalXP} XP</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-sm border-primary/30 border-glow-cyan p-4">
                <div className="flex items-center gap-3">
                  <Icon name="Flame" className="text-orange-500" size={32} />
                  <div>
                    <p className="text-xs text-muted-foreground">Стрик</p>
                    <p className="text-2xl font-bold text-orange-500">{streak} дней</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary animate-glow-pulse" />
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-primary glow-cyan">КАРТА КУРСОВ</h2>
              <Badge className="bg-secondary/20 text-secondary border-secondary/50 text-lg px-4 py-2">
                <Icon name="Map" size={18} className="mr-2" />
                Прогресс: {Math.round((courses.filter(c => c.progress > 0).length / courses.length) * 100)}%
              </Badge>
            </div>

            <div className="grid gap-6">
              {courses.map((course, index) => (
                <Card
                  key={course.id}
                  className={`
                    relative overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-slide-in
                    ${course.locked 
                      ? 'bg-card/40 backdrop-blur-sm border-muted/30 opacity-60 cursor-not-allowed' 
                      : 'bg-card/80 backdrop-blur-sm border-primary/30 border-glow-cyan cursor-pointer hover:border-glow-magenta'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {course.locked && (
                    <div className="absolute top-4 right-4 z-10">
                      <Icon name="Lock" className="text-muted-foreground" size={32} />
                    </div>
                  )}
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                          <Badge className={getLevelColor(course.level)}>
                            {course.level}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{course.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <Icon name="Coins" className="text-yellow-500" size={20} />
                        <span className="text-xl font-bold text-yellow-500">+{course.xp} XP</span>
                      </div>
                    </div>

                    {!course.locked && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Прогресс</span>
                          <span className="text-sm font-bold text-primary glow-cyan">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-3 bg-muted" />
                      </div>
                    )}

                    {course.locked && (
                      <div className="mt-4 p-3 bg-muted/20 border border-muted/30 rounded">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Info" size={16} />
                          Разблокируется на уровне {playerLevel + (index - 2) * 2}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-secondary/30 border-glow-magenta p-6 animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-secondary glow-magenta mb-4 flex items-center gap-2">
                <Icon name="Award" size={28} />
                ДОСТИЖЕНИЯ
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`
                      p-4 rounded border transition-all duration-300 text-center
                      ${achievement.unlocked 
                        ? 'bg-primary/10 border-primary/50 border-glow-cyan animate-float' 
                        : 'bg-muted/10 border-muted/30 opacity-40'
                      }
                    `}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <Icon 
                      name={achievement.icon as any} 
                      className={achievement.unlocked ? 'text-primary' : 'text-muted-foreground'} 
                      size={32} 
                    />
                    <p className="text-xs mt-2 font-semibold">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/30 border-glow-cyan p-6 animate-slide-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-bold text-primary glow-cyan mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={28} />
                СТАТИСТИКА
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Завершено уроков</span>
                    <span className="text-sm font-bold text-primary">42/120</span>
                  </div>
                  <Progress value={35} className="h-2 bg-muted" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Время обучения</span>
                    <span className="text-sm font-bold text-secondary">24ч 15м</span>
                  </div>
                  <Progress value={60} className="h-2 bg-muted" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Решено задач</span>
                    <span className="text-sm font-bold text-green-400">156</span>
                  </div>
                  <Progress value={85} className="h-2 bg-muted" />
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-primary/50 p-6 animate-slide-in border-glow-cyan" style={{ animationDelay: '1s' }}>
              <div className="absolute top-4 right-4 rotate-12">
                <Icon name="Rocket" className="text-primary opacity-20" size={64} />
              </div>
              
              <p className="text-lg font-bold text-primary glow-cyan mb-2 italic relative z-10">
                "Будущее принадлежит тем, кто готов к переменам"
              </p>
              <p className="text-sm text-muted-foreground relative z-10">— Добро пожаловать в Неоновую Эру Обучения</p>
            </Card>
          </div>
        </div>

        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border-2 border-primary/50 flex items-center justify-center transform -rotate-12 border-glow-cyan">
            <span className="text-2xl font-bold text-primary glow-cyan">01</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
