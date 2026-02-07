import type { UserConfig } from '@commitlint/types';





const config: UserConfig = {
	defaultIgnores: true,
	rules: {
		'subject-case': [2, 'always', 'lower-case'],
		'subject-full-stop': [0],
	},
	plugins: [
		{
			rules: {
				'russian-verb-infinitive': async (parsed) => {
					const header = parsed.header;
					if (!header) return [true];
					const subject = header.split(': ')[1]?.trim();
					if (!subject) return [true];

					const verb = subject.split(' ')[0];

					const infinitives = [
						'добавить',
						'исправить',
						'обновить',
						'удалить',
						'изменить',
						'установить',
					];
					const isInfinitive = infinitives.includes(verb.toLowerCase());

					return [
						isInfinitive,
						`Описание должно начинаться с глагола в инфинитиве (напр. 'добавить', 'исправить')\n\nНайдено: '${verb}'`,
					];
				},
				'single-quotes-only': (parsed) => {
					const header = parsed.raw || parsed.header;
					if (!header) return [true, 'Только одинарные кавычки!'];
					const badQuotes = /[“”""„«»]/;
					return [!badQuotes.test(header), 'Только одинарные кавычки!'];
				},
			},
		},
	],
	extends: ['@commitlint/config-conventional'],
};

module.exports = config;
