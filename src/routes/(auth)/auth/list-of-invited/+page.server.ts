import { error } from '@sveltejs/kit';
import type { PageServerData, PageServerLoad } from './$types';

export const load = (async ({ locals: { getSession, supabase }, url }) => {
	const session = await getSession();
	if (!session) return error(401, 'คุณไม่มีสิทธิ์เข้าถึงหน้านี้');
	const page = url.searchParams.get('page') ?? '1';
	if (typeof +page !== 'number') return error(400, 'ไม่พบหน้าที่ต้องการ');
	const listUser = (
		await supabase.auth.admin.listUsers({
			page: +page,
			perPage: 100
		})
	).data.users;
	return {
		inviteList: listUser
	};
}) as PageServerLoad;
