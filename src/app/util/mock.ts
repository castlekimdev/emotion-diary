type DiaryEntry = {
  id: number;
  date: number;
  emotion: number;
  content: string;
};

const generateMockData = (numEntries: number): DiaryEntry[] => {
  const mockData: DiaryEntry[] = [];
  const now = new Date().getTime();

  for (let i = 1; i <= numEntries; i++) {
    mockData.push({
      id: -i,
      date: now - 1000 * 60 * 60 * 24 * (2 * i),
      emotion: i % 5 === 0 ? 5 : i % 5,
      content: `${i}번 일기 내용`,
    });
  }

  return mockData;
};

export const mockData = generateMockData(60);
