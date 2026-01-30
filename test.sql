select                                                
`ee`.`event_id`,                                      
sub.*,                                                                                          
ifnull(`sub`.`viewing_time` + `sub`.`like` + `sub`.`comment` + `sub`.`gift`, 0) AS `total`                                                
from                                                
`event_entries` as `ee`                                                                                      
left join (                        
	select                                        
	`viewing_time`.`user_id`,
     `viewing_time`.`sender_id`,
	CONVERT(0.010, DECIMAL(10, 2)) * CASE WHEN `viewing_time`.`val` < 0 THEN 0 ELSE `viewing_time`.`val` END as `viewing_time`,                                                
	CONVERT(0.010, DECIMAL(10, 2)) * IFNULL(`like`.`val`, 0) as `like`,                                                
	CONVERT(0.010, DECIMAL(10, 2)) * IFNULL(`comment`.`val`, 0) as `comment`,                                                
	CONVERT(1.000, DECIMAL(10, 2)) * IFNULL(`gift`.`val`, 0) as `gift`                                                
	from                                                
	(                                                                                
			select 
			  `srvh`.`user_id`,
			  `srvh`.`viewer_user_id` AS `sender_id`,
			  TRUNCATE(
					SUM(
					  TIME_TO_SEC(
							TIMEDIFF(
							  CONVERT(
									CASE 
											WHEN IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' THEN IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) 
											ELSE '2026-01-21 23:59:59'
									END, 
									datetime
							  ), 
							  CONVERT(
									CASE 
											WHEN `srvh`.`created_at` > '2026-01-20 15:00:00' THEN `srvh`.`created_at` 
											ELSE '2026-01-20 15:00:00' 
									END, 
									datetime
							  )
							)
					  )
					) / 60, 
					0
			  ) AS `val` 
			from 
			  `stream_room_viewer_histories` as `srvh` 
			  left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id` 
			where 
			  sr.id in (
					select 
					  `srvh`.`stream_room_id` 
					from 
					  `stream_room_viewer_histories` as `srvh` 
					  left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id` 
					  left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id` 
					where 
					  (
							`srvh`.`created_at` > '2026-01-20 15:00:00' or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`)
					  ) 
					  and 
					  (
							IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`)
					  ) 
					  and `ee`.`event_id` = 1233 
					  and sr.user_id in (60686, 60687, 60691) 
					group by 
					  `srvh`.`stream_room_id`
			  ) 
			  and
					  (
							(
							`srvh`.`created_at` > '2026-01-20 15:00:00' or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`)
							)
					  ) 
			  and 
					  (
							(
							  IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`)
							)
					  ) 
			group by 
			  `srvh`.`user_id`, `srvh`.`viewer_user_id`
	) as `viewing_time`                                                
	left join (
		select
		`user_id`,
		`sender_id`, 
		sum(val) as val                                                        
			from                                                        
			(                                                        
			(                                                        
			select                                                        
			`streamer_id` as `user_id`,                                                 
			`user_id` as `sender_id`,                                                         
			sum(like_total) as val                                                        
			from                                                        
			`user_likes_refresh`                                                        
			where                                                        
			stream_room_id in (                                                        
							select                                        
							`srvh`.`stream_room_id`                                        
							from                                        
							`stream_room_viewer_histories` as `srvh`                                        
							left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
							left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
							where
							(`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
							and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
							and `ee`.`event_id` = 1233
							and sr.user_id in (60686, 60687, 60691)
							group by                                        
							`srvh`.`stream_room_id`
			)                                                        
			and `created_at` >= '2026-01-20 15:00:00'                                                        
			and `created_at` <= '2026-01-21 23:59:59'                                                        
			group by `streamer_id`, `user_id`                                                        
			)                                                        
			union                                                        
			(                                                        
			select                                                        
			`streamer_id` as `user_id`,                                                 
			`user_id` as `sender_id`,                                                        
			sum(like_total) as val                                                        
			from                                                        
			`user_likes_history`                                                        
			where                                                        
			stream_room_id in (                                                        
							select                                        
							`srvh`.`stream_room_id`                                        
							from                                        
							`stream_room_viewer_histories` as `srvh`                                        
							left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
							left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
							where
							(`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
							and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
							and `ee`.`event_id` = 1233
							and sr.user_id in (60686, 60687, 60691)
							group by                                        
							`srvh`.`stream_room_id`        
			)                                                        
			and `created_at` >= '2026-01-20 15:00:00'                                                        
			and `created_at` <= '2026-01-21 23:59:59'                                                        
			group by `streamer_id`, `user_id`                                                         
			)                                                        
			union                                                        
			(                                                        
				select                                                        
				`streamer_id` as `user_id`,                                                 
				`user_id` as `sender_id`,                                                       
				sum(like_total) as val                                                        
				from                                                        
				`user_likes_history_old_202601`                                                        
				where                                                        
				stream_room_id in (                                                        
						select                                        
						`srvh`.`stream_room_id`                                        
						from                                        
						`stream_room_viewer_histories` as `srvh`                                        
						left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
						left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
						where
						(`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
						and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
						and `ee`.`event_id` = 1233
						and sr.user_id in (60686, 60687, 60691)
						group by                                        
						`srvh`.`stream_room_id`        
				)                                                        
				and `created_at` >= '2026-01-20 15:00:00'                                                        
				and `created_at` <= '2026-01-21 23:59:59'                                                        
				group by `streamer_id`, `user_id`                                                        
			)                                                        
			) as `l`                                                        
			group by                                                        
			`user_id`, `sender_id`
					
	) as `like` on `viewing_time`.`user_id` = `like`.`user_id`      and               `viewing_time`.`sender_id` = `like`.`sender_id`                            
	left join (                                                                
	select                                        
			`user_id`,
			`sender_id`,                                    
			sum(val) as val                                        
			from                                        
			(                                        
			(                                        
			select                                        
			`streamer_id` as `user_id`,                                      
			`user_id` as `sender_id`,                                        
			count(*) as val                                        
			from                                        
			`user_comments_refresh`                                        
			where                                        
			stream_room_id in (                                        
											select                                        
									`srvh`.`stream_room_id`                                        
									from                                        
									`stream_room_viewer_histories` as `srvh`                                        
									left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
									left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
									where
									(`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
									and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
									and `ee`.`event_id` = 1233
									and sr.user_id in (60686, 60687, 60691)
									group by                                        
									`srvh`.`stream_room_id`        
			)                                        
			and `created_at` >= '2026-01-20 15:00:00'                                                        
			and `created_at` <= '2026-01-21 23:59:59'                                        
			and streamer_id != user_id                                        
			group by                                        
			`streamer_id` , `user_id`                                       
			)                                        
			union                                        
					(                                
			select                                        
			 `streamer_id` as `user_id`,                                      
			`user_id` as `sender_id`,                                        
			count(*) as val                                        
			from                                        
			`user_comments_history`                                        
			where                                        
			stream_room_id in (                                        
					select                                        
					`srvh`.`stream_room_id`                                        
					from                                        
					`stream_room_viewer_histories` as `srvh`                                        
					left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
					left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
					where
					(`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
					and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
					and `ee`.`event_id` = 1233
					and sr.user_id in (60686, 60687, 60691)
					group by                                        
					`srvh`.`stream_room_id`        
			)                                        
			and `created_at` >= '2026-01-20 15:00:00'                                                        
			and `created_at` <= '2026-01-21 23:59:59'                                                
			and streamer_id != user_id                                        
			group by                                        
			 `streamer_id` , `user_id`                                        
			)                                        
			union                                        
					(                                
			select                                        
			`streamer_id` as `user_id`,                                      
			`user_id` as `sender_id`,                                        
			count(*) as val                                        
			from                                        
			`user_comments_history_old_202601`                                        
			where                                        
			stream_room_id in (                                        
					select                                        
					`srvh`.`stream_room_id`                                        
					from                                        
					`stream_room_viewer_histories` as `srvh`                                        
					left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
					left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
					where
					(`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
					and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
					and `ee`.`event_id` = 1233
					and sr.user_id in (60686, 60687, 60691)
					group by                                        
					`srvh`.`stream_room_id`        
			)                                        
			and `created_at` >= '2026-01-20 15:00:00'                                                        
			and `created_at` <= '2026-01-21 23:59:59'                                                
			and streamer_id != user_id                                        
			group by                                        
			 `streamer_id` , `user_id`                                        
			)                                        
			) as `c`                                        
			group by                                        
			`user_id`,  `sender_id`                                        
	) as `comment` on `viewing_time`.`user_id` = `comment`.`user_id`      and               `viewing_time`.`sender_id` = `comment`.`sender_id`                                            
	left join (                                                                
                select                                        
                 `user_id`,
                `sender_id`,                                          
                sum(val) as val                                        
                from                                        
                (                                        
                (                                        
                select                                        
                `streamer_id` as `user_id`,
                `user_id` as `sender_id`,                                 
                sum(total) as val                                        
                from                                        
                `user_gifts_refresh`                                        
                where                                        
                stream_room_id in (                                        
                                        select                                        
                                        `srvh`.`stream_room_id`                                        
                                        from                                        
                                        `stream_room_viewer_histories` as `srvh`                                        
                                        left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
                                        left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
                                        where
                                        (`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
                                        and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
                                        and `ee`.`event_id` = 1233
                                        and sr.user_id in (60686, 60687, 60691)
                                        group by                                        
                                        `srvh`.`stream_room_id`        
                )                                        
                and `created_at` >= '2026-01-20 15:00:00'                                                        
                and `created_at` <= '2026-01-21 23:59:59'                                        
                group by                                        
                `streamer_id`,`user_id`                                        
                )                                        
                union                                        
                (                                        
                select                                        
                `streamer_id` as `user_id`,
                `user_id` as `sender_id`,                                        
                sum(total) as val                                        
                from                                        
                `user_gifts_history`                                        
                where                                        
                stream_room_id in (                                        
                        select                                        
                        `srvh`.`stream_room_id`                                        
                        from                                        
                        `stream_room_viewer_histories` as `srvh`                                        
                        left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
                        left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
                        where
                        (`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
                        and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
                        and `ee`.`event_id` = 1233
                        and sr.user_id in (60686, 60687, 60691)
                        group by                                        
                        `srvh`.`stream_room_id`        
                )                                        
                and `created_at` >= '2026-01-20 15:00:00'                                                        
                and `created_at` <= '2026-01-21 23:59:59'                                        
                group by                                        
                `streamer_id`,`user_id`                                        
                )                                        
                union                                        
                (                                        
                select                                        
                `streamer_id` as `user_id`,
                `user_id` as `sender_id`,                                        
                sum(total) as val                                        
                from                                        
                `user_gifts_history_old_202601`                                        
                where                                        
                stream_room_id in (                                        
                                select                                        
                                `srvh`.`stream_room_id`                                        
                                from                                        
                                `stream_room_viewer_histories` as `srvh`                                        
                                left join `stream_rooms` as `sr` on `srvh`.`stream_room_id` = `sr`.`id`                                        
                                left join `event_entries` as `ee` on `sr`.`user_id` = `ee`.`user_id`                                        
                                where
                                (`srvh`.`created_at` > '2026-01-20 15:00:00'        or '2026-01-20 15:00:00' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
                                and (IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`) < '2026-01-21 23:59:59' or '2026-01-21 23:59:59' BETWEEN `srvh`.`created_at` AND IFNULL(`srvh`.`updated_at`, `sr`.`updated_at`))                                        
                                and `ee`.`event_id` = 1233
                                and sr.user_id in (60686, 60687, 60691)
                                group by                                        
                        `srvh`.`stream_room_id`        
                )                                        
                and `created_at` >= '2026-01-20 15:00:00'                                                        
                and `created_at` <= '2026-01-21 23:59:59'                                
                group by                                        
               `streamer_id`,`user_id`                                       
                )                                        
                ) as `g`                                        
                group by                                        
                `user_id`, `sender_id`                                                                        
) as `gift` on `viewing_time`.`user_id` = `gift`.`user_id`       and               `viewing_time`.`sender_id` = `gift`.`sender_id`                                           
	group by                                                
	`viewing_time`.`user_id`,`viewing_time`.`sender_id`                                                
                                                
) as `sub` on `ee`.`user_id` = `sub`.`user_id`                                                
where                                                
`ee`.`event_id` = 1233                                                                                             
order by                                                
user_id desc,
sender_id desc