import { z } from 'zod';

const AVAILABLE_CATEGORIES = ['Parque Estadual dos Três Picos', 'Vale dos Deuses', 'Pedra do Sino', 'Travessia Petrópolis-Teresópolis', 'Cachoeira dos Frades', 'Cartão postal', 'Poço Dois Irmãos', 'Dois Bicos de Sebastiana'] as const;

export const editProfileSchema = z.object({
	name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
	imagem: z.string().url('Imagem deve ser uma URL válida'),
	email: z.email(),
	password: z.string().optional().or(z.literal('')),
	description: z.string().optional(),
	categories: z.array(z.string()).optional(),
});

export type EditProfileFormData = z.infer<typeof editProfileSchema>;

export { AVAILABLE_CATEGORIES };
