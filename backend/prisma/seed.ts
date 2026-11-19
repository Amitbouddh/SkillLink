import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
const passwordHash = bcrypt.hashSync('password123', 10);
async function main() {
  await prisma.review.deleteMany(); await prisma.notification.deleteMany(); await prisma.message.deleteMany(); await prisma.projectUpdate.deleteMany(); await prisma.milestone.deleteMany(); await prisma.project.deleteMany(); await prisma.application.deleteMany(); await prisma.requirement.deleteMany(); await prisma.artisanProfile.deleteMany(); await prisma.user.deleteMany();
  const aditi = await prisma.user.create({ data: { name: 'Aditi Shah', email: 'aditi@aria.example', passwordHash, role: 'MANUFACTURER', company: 'Aria Manufacturing' } });
  const admin = await prisma.user.create({ data: { name: 'SkillLink Admin', email: 'admin@skilllink.example', passwordHash, role: 'ADMIN' } });
  const artisans = await Promise.all([
    ['Rajesh Kumar','Wood Carving',8,'Jodhpur',4.8,'traditional and contemporary furniture'], ['Meera Joshi','Furniture Manufacturing',11,'Jaipur',4.9,'sustainable materials and modern design'], ['Imran Sheikh','Metal Craft',6,'Udaipur',4.7,'brass, copper, and wrought iron']
  ].map(async ([name, skill, years, location, rating, bio]) => { const user = await prisma.user.create({ data: { name: String(name), email: `${String(name).toLowerCase().replace(' ', '.')}@skilllink.example`, passwordHash, role: 'ARTISAN' } }); return prisma.artisanProfile.create({ data: { userId: user.id, skill: String(skill), skillsJson: JSON.stringify([skill]), experienceYears: Number(years), location: String(location), rating: Number(rating), availability: 'Available', projectCount: Number(years) * 15, bio: String(bio), languagesJson: JSON.stringify(['Hindi','English']), certificatesJson: JSON.stringify([]), portfolioJson: JSON.stringify([]) } }); }));
  const requirement = await prisma.requirement.create({ data: { manufacturerId: aditi.id, title: 'Hand-carved dining collection', type: 'Wood carving', location: 'Jodhpur', status: 'AI_MATCHING', description: 'A premium hand-carved dining collection.', deadline: new Date('2026-10-30') } });
  for (const profile of artisans) await prisma.application.create({ data: { requirementId: requirement.id, artisanId: profile.userId, skill: profile.skill, experienceYears: profile.experienceYears, rating: profile.rating, matchScore: profile.skill === 'Wood Carving' ? 94 : 70 } });
  const project = await prisma.project.create({ data: { name: 'Hand-carved dining collection', manufacturerId: aditi.id, artisanId: artisans[0].userId, budget: 50000, startDate: new Date('2026-09-01'), deadline: new Date('2026-10-30'), progress: 45, status: 'IN_PROGRESS' } });
  for (const [name, done, amount] of [['Material Preparation', true, 10000], ['Initial Production', false, 20000], ['Finishing', false, 10000], ['Quality Inspection', false, 5000], ['Final Delivery', false, 5000]] as [string, boolean, number][]) await prisma.milestone.create({ data: { projectId: project.id, name, done, amount } });
  await prisma.projectUpdate.createMany({ data: [{ projectId: project.id, text: 'Materials sourced and approved' }, { projectId: project.id, text: 'First sample produced' }] });
  await prisma.notification.createMany({ data: [{ userId: aditi.id, text: 'New artisan application received.' }, { userId: aditi.id, text: 'Your requirement has 5 new AI matches.' }, { userId: artisans[0].userId, text: 'Project milestone completed.' }] });
  await prisma.message.create({ data: { senderId: artisans[0].userId, recipientId: aditi.id, text: "Hi Aditi, I've reviewed the dining collection brief." } });
  console.log(`Seeded ${admin.name}, manufacturer, 3 artisans, requirement, project, messages and notifications.`);
}
main().catch(console.error).finally(() => prisma.$disconnect());
