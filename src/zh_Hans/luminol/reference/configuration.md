# 配置

```toml
# 修复
[fixes]

	# 允许虚空交易
	[fixes.allow_void_trading]
		enabled = false

	# 允许复制沙子
	[fixes.allow_sand_duping]
		enabled = false

	# 允许不安全的传送
	[fixes.allow_unsafe_teleportation]
		enabled = false

	# 允许更新错误的绊线
	[fixes.allow_update_incorrect_trip_wire]
		enabled = false

	# Folia修复
	[fixes.folia]

		# 修复幽灵传送
		[fixes.folia.fix_spector_teleportation]
			enabled = false

		# 修复高速问题
		[fixes.folia.fix_high_velocity_issue]
			enabled = false
			# 当检测到时警告
			warn_on_detected = true

		# 防止移动期间的传送调用
		[fixes.folia.prevent_teleportasync_call_during_moving]
			enabled = false
			# 检测到时抛出异常
			throw_on_detected = true

	# 使用原版随机源
	[fixes.use_vanilla_random_source]
		enable_for_player_entity = false

# 杂项
[misc]

	# 在离线模式下警告
	[misc.warn_on_offline_mode]
		enabled = true

	# 服务器修改名称
	[misc.server_mod_name]
		name = "Luminol"
		# 使用原版名称
		vanilla_spoof = false

	# 看门狗
	[misc.watchdog]
		# 警告周期刻数
		warn_period_ticks = 100
		# 超时刻数
		timeout_ticks = 600
		# 禁用
		enabled = false

	# Mojang 聊天标志
	[misc.mojang_chat_sign]
		enabled = true

	# IO uring 支持
	[misc.io_uring_support]
		enabled = false

	# 用户名检查
	[misc.username_checks]
		enabled = true

	# Mojang 聊天顺序检查
	[misc.mojang_out_of_order_chat_check]
		enabled = true

	# 区域格式
	[misc.region_format]
		# 线性压缩级别
		linear_compression_level = 1
		# 线性刷新频率
		linear_flush_frequency = 10
		# 格式名称
		formatName = "ANVIL"
		# 线性刷新线程计数
		linear_flusher_thread_count = 1

	# tpsbar
	[misc.tpsbar]
		# Ping颜色列表
		ping_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
		# 格式
		format = "<gray>TPS<yellow>:</yellow> <tps> MSPT<yellow>:</yellow> <mspt> Ping<yellow>:</yellow> <ping>ms"
		# TPS颜色列表
		tps_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
		enabled = false
		# 更新间隔刻数
		update_interval_ticks = 15

# 优化
[optimizations]

	# 将区块加载到活跃爬行实体
	[optimizations.load_chunks_to_active_climbing_entities]
		allow = false

	# 在非活动时跳过目标选择器的刻
	[optimizations.skip_goal_selector_tick_in_inactive_tick]
		enabled = false

	# 替代保持活动的处理方式
	[optimizations.alternative_keepalive_handling]
		enabled = false

	#Optimizes entity brains when
	#they're far away from the player
	[optimizations.dab]
		# 该值定义最远的实体多久执行一次路径查找和行为。20 = 1秒
		max-tick-freq = 20
		# 该值定义距离如何修改实体的刻频率。频率 = (距离到玩家^2) / (2^value)
		# 如果你想让距离更远的实体更少地执行刻操作，请使用7。
		# 如果你想让距离更远的实体更频繁地执行刻操作，请尝试9。
		activation-dist-mod = 0
		# 此值确定实体必须距玩家多远才能开始受到 DEAR 的影响。
		start_distance = 12
		blacklisted-entities = []
		enabled = false

	# 异步路径处理
	[optimizations.async_path_processing]
		# 最大线程数
		max_threads = 0
		enabled = false
		# 保持活动时间
		keep_alive_time = 60

	# 变量实体唤醒
	[optimizations.variable_entity_waking_up]
		# 实体唤醒持续时间比例标准差
		entity_wakeup_duration_ratio_standard_deviation = 0.2

	# 投射物
	[optimizations.projectile]
		# 每个投射物的最大加载次数
		max-loads-per-projectile = 0
		# 每个刻的最大加载次数
		max-loads-per-tick = 0

	# 减少传感器工作
	[optimizations.reduce_sensor_work]
		# 延迟刻数
		delay_ticks = 10
		enabled = true

	#These values define a entity's maximum lifespan. If an
	#entity is in this list and it has survived for longer than
	#that number of ticks, then it will be removed. Setting a value to
	#-1 disables this feature.
	[optimizations.entity_timeouts]
	

	# 窒息优化
	[optimizations.suffocation_optimization]
		enabled = false

# 游戏玩法
[gameplay]

	# Leaves Bladeren 协议
	[gameplay.leaves_bladeren_protocol]
		# 启用 MSPT 同步协议
		enable_mspt_sync_protocol = false
		# 启用基本协议
		enable_base_protocol = false
		# MSPT 同步间隔
		mspt_sync_interval = 20

	# Leaves Carpet 协议
	[gameplay.leaves_carpet_protocol]
		enabled = false



```
