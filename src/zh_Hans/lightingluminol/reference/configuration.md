### `unsupported.disable_check_for_folia_supported`

```toml
[unsupported.disable_check_for_folia_supported]
	#Disable check for folia-supported for leaves plugin.
	#为 Leaves 插件禁用 folia-supported 检查。
	#ATTENTION: No support will be provided if you enabled this.
	#注意：如果启用此选项，将不会提供任何支持。
	disable_for_leaves = false
	#Disable check for folia-supported for spigot/bukkit/paper plugin.
	#为 Spigot/Bukkit/Paper 插件禁用 folia-supported 检查。
	#ATTENTION: No support will be provided if you enabled this.
	#注意：如果启用此选项，将不会提供任何支持。
	disable_for_paper = false
```

### `experiment.disable_entity_exception_catchers`

```toml
[experiment.disable_entity_exception_catchers]
	#If this config enabled, the server will crash directly when entity ticking has some errors instead of removing the entity to keep server running.
	#如果启用此配置，当实体 tick 出错时，服务器会直接崩溃，而不是移除实体来保持服务器继续运行。
	#It could prevent entity disappearing but may cause more server crashes.
	#这可以防止实体消失，但可能会导致更多服务器崩溃。
	#DO NOT ENABLE UNLESS YOU KNOW WHAT YOU ARE DOING!!!
	#除非完全清楚后果，否则不要启用此选项！！！
	enabled = false
```

### `experiment.disable_async_catchers`

```toml
[experiment.disable_async_catchers]
	#Disable async catcher to prevent some crashes caused by some plugins which supports folia but has issuable logics.
	#禁用异步捕获器，以防止一些虽支持 Folia 但逻辑有问题的插件导致的崩溃。
	#ATTENTION: Would cause region deadlock when getChunkAt was incorrectly called!
	#注意：如果错误地调用 getChunkAt，会导致区域死锁！
	#           See: https://github.com/PaperMC/Folia/issues/280 which is resolved in folia(https://github.com/PaperMC/Folia/commit/2e7bc0721af95196c85500c7bb136aeea0bc12ce)
	#           参见：https://github.com/PaperMC/Folia/issues/280 ，该问题已在 Folia 中通过提交 https://github.com/PaperMC/Folia/commit/2e7bc0721af95196c85500c7bb136aeea0bc12ce 修复。
	#DO NOT ENABLE UNLESS YOU KNOW WHAT YOU ARE DOING!!!
	#除非完全清楚后果，否则不要启用此选项！！！
	#
	enabled = false
```

### `experiment.command`

```toml
[experiment.command]
	enable_data_command = false
	#Force to enable command blocks.
	#强制启用命令方块。
	#ATTENTION: WOULD CAUSE SERVER CRASHING AS SOME THREADING ISSUE!!!
	#注意：由于一些线程问题，这可能会导致服务器崩溃！！！
	#   DO NOT ENABLE UNLESS YOU KNOW WHAT YOU ARE DOING!!!
	#   除非完全清楚后果，否则不要启用此选项！！！
	#
	enable_command_block = false
	#Enable waypoint and waypoint command.
	#启用路径点（waypoint）及路径点相关命令。
	#WARN: Still under testing
	#警告：该功能仍在测试中。
	#
	enable_waypoints_and_waypoint_command = false
```

### `fixes.prevent_incorrect_teleport_async_calls_during_move_event`

```toml
[fixes.prevent_incorrect_teleport_async_calls_during_move_event]
	throw_when_caught = true
	#When enabled, the server would reject some incorrect teleportAsync calls during move events.
	#启用后，服务器会在移动事件期间拒绝一些不正确的 teleportAsync 调用。
	#And this will reduce the crashes which caused by plugins(Residence etc.)
	#这将减少由插件（如 Residence 等）引起的崩溃。
	#But you should notice that it might break the compatibility with some plugins.
	#但需要注意，这可能会破坏与某些插件的兼容性。
	enabled = false
```

### `fixes.allow_unsafe_teleportation`

```toml
[fixes.allow_unsafe_teleportation]
	#Allow non player entities enter end portals if enabled.
	#启用后，允许非玩家实体进入末地传送门。
	#If you want to use sand duping,please turn on this.
	#如果你想使用沙子刷物（沙子复制），请打开此选项。
	#Warning: This would cause some unsafe issues, you could learn more on : https://github.com/PaperMC/Folia/issues/297
	#警告：这可能导致一些不安全的问题，更多信息可参考：https://github.com/PaperMC/Folia/issues/297
	enabled = false
```

### `fixes.fix_high_velocity_issue`

```toml
[fixes.fix_high_velocity_issue]
	#A simple fix of an issue on folia
	#Folia 上某问题的简单修复。
	#(Sometimes the entity would
	#have a large moment that cross the
	#different tick regions, and it would
	#make the server crashed) but sometimes it might doesn't work
	#（有时实体会产生很大位移并跨越不同 tick 区域，导致服务器崩溃）但有时此修复可能无效。
	enabled = false
	warn_on_detected = true
```

### `fixes.force_cleanup_drop_non_owned_entity_memory_module`

```toml
#This config is a temporary fix for those incorrect owned data in the memory of each mob, for more you can see https://github.com/PaperMC/Folia/issues/203
#此配置是针对每个生物内存中不正确的“所属数据”的临时修复，详情可参见：https://github.com/PaperMC/Folia/issues/203
[fixes.force_cleanup_drop_non_owned_entity_memory_module]
	#When enabled, the entity's brain will clean the memory which is typed of entity and not belong to current tickregion
	#启用后，实体的脑（AI）会清理类型为 entity 且不属于当前 tick 区域的记忆。
	enabled_for_entity = false
	#When enabled, the entity's brain will clean the memory which is typed of position_tracker and not belong to current tickregion
	#启用后，实体的脑会清理类型为 position_tracker 且不属于当前 tick 区域的记忆。
	enabled_for_position_tracker = false
	#When enabled, the entity's brain will clean the memory which is typed of block_pos and not belong to current tickregion
	#启用后，实体的脑会清理类型为 block_pos 且不属于当前 tick 区域的记忆。
	enabled_for_block_pos = false
```

### `fixes.use_vanilla_random_source`

```toml
[fixes.use_vanilla_random_source]
	#Related with RNG cracks
	#与随机数（RNG）破解相关。
	enable_for_player_entity = false
```

### `fixes.collision_behavior`

```toml
[fixes.collision_behavior]
	#Decides which collision logics will be used(Moonrise and Paper modified this for optimization but would also break some vanilla behaviours at the same time).
	#决定使用哪种碰撞逻辑（Moonrise 和 Paper 为优化对此做了修改，但同时会破坏部分原版行为）。
	#Would be useful for fixing improper behaviours of some huge redstone machines
	#对修复一些大型红石机器的异常行为很有帮助。
	#Available Value:
	#可用值：
	#VANILLA
	#VANILLA
	#BLOCK_SHAPE_VANILLA
	#BLOCK_SHAPE_VANILLA
	#PAPER
	#PAPER
	mode = "BLOCK_SHAPE_VANILLA"
```

### `function.regionbar`

```toml
[function.regionbar]
	format = "<gray>Util<yellow>:</yellow> <util> Chunks<yellow>:</yellow> <green><chunks></green> Players<yellow>:</yellow> <green><players></green> Entities<yellow>:</yellow> <green><entities></green>"
	enabled = false
	util_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
	#Available displays: BOSS_BAR, ACTION_BAR, TAB_LIST
	#可用显示方式：BOSS_BAR、ACTION_BAR、TAB_LIST
	display = "BOSS_BAR"
	update_interval_ticks = 15
```

### `function.membar`

```toml
[function.membar]
	format = "<gray>Memory usage <yellow>:</yellow> <used>MB<yellow>/</yellow><available>MB"
	memory_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
	enabled = false
	#Available displays: BOSS_BAR, ACTION_BAR, TAB_LIST
	#可用显示方式：BOSS_BAR、ACTION_BAR、TAB_LIST
	display = "BOSS_BAR"
	update_interval_ticks = 15
```

### `function.tripwire_dupe`

```toml
[function.tripwire_dupe]
	enabled = false
	#Available Value:
	#可用值：
	#VANILLA20
	#VANILLA20
	#VANILLA21
	#VANILLA21
	#MIXED
	#MIXED
	behavior_mode = "VANILLA21"
```

### `function.region_format`

```toml
[function.region_format]
	#Decides the compression level of the region file(Only works for LINEAR_V2 and B_LINEAR)
	#决定区块文件的压缩等级（仅对 LINEAR_V2 与 B_LINEAR 生效）。
	linear_compression_level = 1
	#Decides when it will be flushed to the region file when it has been marked to save for n(default is 100) milliseconds(Only works for LINEAR_V2)
	#决定在被标记为需要保存 n 毫秒后（默认 100ms），何时将数据写入区块文件（仅对 LINEAR_V2 生效）。
	linear_io_flush_delay_ms = 100
	#Decides when it will be flushed to the region file when there has been no write operations for n(default is 3000) milliseconds(Only works for B_LINEAR)
	#决定在持续 n 毫秒（默认 3000ms）没有写操作时，何时将数据写入区块文件（仅对 B_LINEAR 生效）。
	blinear_io_flush_delay_ms = 3000
	#Decides the worker thread count of linear(Only works for LINEAR_V2)
	#决定 linear 的工作线程数量（仅对 LINEAR_V2 生效）。
	linear_io_thread_count = 6
	#Decides the worker thread count of buffered linear(Only works for B_LINEAR)
	#决定缓冲 linear（B_LINEAR）的工作线程数量（仅对 B_LINEAR 生效）。
	blinear_io_thread_count = 6
	#Available choices: MCA, B_LINEAR, LINEAR_V2
	#可选格式：MCA、B_LINEAR、LINEAR_V2
	format = "MCA"
	#Decides if it could use virtual threads for linear format(Only works for LINEAR_V2)
	#决定 linear 格式是否可以使用虚拟线程（仅对 LINEAR_V2 生效）。
	linear_use_virtual_thread = true
```

### `function.tpsbar`

```toml
[function.tpsbar]
	ping_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
	#Example(if mspt is 20.00000000)(value -> result): 2 -> 20.00, 1 -> 20.0
	#示例（如果 mspt 为 20.00000000）（值 -> 显示结果）：2 -> 20.00，1 -> 20.0
	precision_of_mspt_value = 2
	#Example(if tps is 20.00000000)(value -> result): 2 -> 20.00, 1 -> 20.0
	#示例（如果 tps 为 20.00000000）（值 -> 显示结果）：2 -> 20.00，1 -> 20.0
	precision_of_tps_value = 2
	chunkhot_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
	#Available displays: BOSS_BAR, ACTION_BAR, TAB_LIST
	#可用显示方式：BOSS_BAR、ACTION_BAR、TAB_LIST
	display = "BOSS_BAR"
	format = "<gray>TPS<yellow>:</yellow> <tps> MSPT<yellow>:</yellow> <mspt> Ping<yellow>:</yellow> <ping>ms ChunkHot<yellow>:</yellow> <chunkhot>"
	tps_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
	enabled = false
	update_interval_ticks = 15
```

### `function.secure_seed`

```toml
[function.secure_seed]
	#Once you enable secure seed, all ores and structures are generated with 1024-bit seed
	#instead of using 64-bit seed in vanilla, made seed cracker become impossible.
	#启用后，所有矿物与结构将使用 1024 位种子生成（而非原版 64 位），使种子破解几乎不可行。
	#***** WARN: You need keep it enabled if your old world are also using secure seed! Or it will kill your save *****
	#***** 警告：若旧存档也曾使用 secure seed，请保持启用，否则会损坏存档 *****
	enabled = false
```

### `misc.server_mod_name`

```toml
[misc.server_mod_name]
	#Decides the server mod name shown in your F3 debug screen.
	#决定在 F3 调试界面中显示的服务端模组名称。
	name = "Luminol"
	#Ignore any plugin's modification and server mod name set in this config block, only force sending brand name of vanilla
	#忽略插件修改及本配置中的名称，仅强制发送原版品牌名。
	vanilla_spoof = false
```

### `misc.disable_warning`

```toml
[misc.disable_warning]
	#Disable heightmap-check's warning
	#禁用高度图检查（heightmap-check）的警告。
	disable_heightmap_warning = false
	#Disable offline warns popped in the log when starting the server
	#禁用服务器启动时日志中的离线模式警告。
	disable_offline_mode_warning = false
```

### `misc.disable_moved_wrongly_threshold`

```toml
[misc.disable_moved_wrongly_threshold]
	#Disable wrongly move warns and checks
	#禁用错误移动（moved wrongly）相关的警告与检查。
	enabled = false
```

### `misc.username_checks`

```toml
[misc.username_checks]
	#Decide whether the username checks are enabled,
	# you could disable it if your players are using Chinese username but also notification any security impacts caused by disabling it
	#是否启用用户名检查；若玩家使用中文名可关闭，但需知悉关闭带来的安全影响。
	enabled = true
```

### `misc.folia_watchdog`

```toml
[misc.folia_watchdog]
	#Decides the interval of the watchdog prints the threads dumps of tickregions in stuck
	#决定看门狗在 tick 区域卡死时打印线程转储（thread dumps）的时间间隔。
	tick_region_time_out_ms = 5000
```

### `misc.save_portal_tickets`

```toml
[misc.save_portal_tickets]
	#whether or not to save the portal tickets when server stopping, this would make it acts like mc before 1.21.5, and won't auto active the portal chunk loader when server started again.
	#决定服务器停止时是否保存传送门 ticket；启用后，该行为类似于 1.21.5 之前的 MC，并且在服务器再次启动时不会自动激活传送门的区块加载器。
	do_save = true
```

### `misc.mojang_out_of_order_chat_check`

```toml
[misc.mojang_out_of_order_chat_check]
	enabled = true
```

### `misc.force_disable_packet_limiter_of_paper`

```toml
#Force and fully disable all packet limiters of Paper, which is used to prevent from kicking by using some quick crafting mods but
#has negative impacts on security
#强制完全禁用 Paper 的所有数据包限制器，可避免因使用快速合成类模组被踢，但会带来安全风险。
[misc.force_disable_packet_limiter_of_paper]
	force_disable = false
```

### `misc.verify_publickey_only_in_online_mode`

```toml
#Only verify the public key in online mode, could be useful when using plugins like MultiLogin with custom auth server configured
#仅在在线模式下验证公钥；适用于使用 MultiLogin 等插件并配置自定义认证服时。
[misc.verify_publickey_only_in_online_mode]
	enabled = false
```

### `misc.sentry`

```toml
[misc.sentry]
	# Logs with a level higher than or equal to this level will be recorded.
	#会记录不低于此等级的日志。
	log_level = "WARN"
	# Only log with a Throwable will be recorded after enabling this.
	#启用后，只会记录带有 Throwable 的日志。
	# Sentry DSN for improved error logging, leave blank to disable,
	#用于改进错误日志记录的 Sentry DSN，留空以禁用，
	# Obtain from https://sentry.io/
	#可在 https://sentry.io/ 获取。
	dsn = ""
```

### `optimizations.cpu_affinity`

```toml
[optimizations.cpu_affinity]
	#Using this you could pin the threads of tick region scheduler to cpu cores listed in the config 'tickregion_affinity' following, which is useful for those CPU with P and E cores (such as 12/13/14 gen Intel Core CPUs and so on.)
	#通过此配置，你可以将 tick 区域调度器的线程绑定到下面 'tickregion_affinity' 中列出的 CPU 核心，这对同时拥有性能核（P 核）与能效核（E 核）的 CPU（如 12/13/14 代 Intel Core 等）非常有用。
	enabled = false
	#The core number you want the tick region threads to bind on
	#要将 tick 区域线程绑定到的核心编号列表。
	tickregion_affinity = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71"]
```

### `optimizations.throttle_goal_selector_tick_in_inactive_tick`

```toml
#Throttles the AI goal selector in entity inactive ticks.
#This can improve performance by a few percent, but has minor gameplay implications.
#在实体非活跃 tick 中限制 AI 目标选择器的执行频率；可小幅提升性能，对玩法有轻微影响。
[optimizations.throttle_goal_selector_tick_in_inactive_tick]
	enabled = false
```

### `optimizations.use_simd`

```toml
#Use SIMD on maps (Originally taken from Pufferfish)
#在地图绘制上使用SIMD（该功能源自于Pufferfish）
[optimizations.use_simd]
	enabled = true
```

### `optimizations.lobotomize_villager`

```toml
#Lobotomizes the villager if it cannot move (Does not disable trading)
#若村民无法移动则对其进行“脑切除”优化（不关闭交易）。
[optimizations.lobotomize_villager]
	#The interval in ticks to check if a villager is lobotomized
	#检查村民是否可被“脑切除”的间隔（tick）。
	check_interval = 100
	#Wait until a villager has been traded with before lobotomizing
	#是否在村民被交易过后再进行“脑切除”。
	wait_until_trade_locked = false
	enabled = false
```

### `optimizations.lithium_sleeping_block_entity`

```toml
[optimizations.lithium_sleeping_block_entity]
	#Use sleeping blocking optimizations from lithium, on luminol the hopper optimizations of paper were totally removed and replaced by those of lithium and it's turned on by default
	#使用 Lithium 的“睡眠方块实体”优化，在 Luminol 上，Paper 的漏斗优化已被完全移除，并由 Lithium 的实现替代，并且默认启用。
	enabled = true
```

### `optimizations.use_async_protocol_switching`

```toml
[optimizations.use_async_protocol_switching]
	#Uses async protocol preparation for mc.
	#为 MC 使用异步协议准备流程。
	#Warn: Due to the packet sequence was changed by this optimization, it might be uncompatible with some plugins(ViaVersion etc.)
	#警告：由于此优化会改变数据包顺序，它可能与某些插件（如 ViaVersion 等）不兼容。
	enabled = false
```

### `optimizations.end_dragon`

```toml
#Optimized end dragon respawn logics from Leaves(https://github.com/LeavesMC/Leaves)
#取自Leaves(https://github.com/LeavesMC/Leaves)的末影龙复活逻辑的优化
[optimizations.end_dragon]
	optimized_dragon_respawn = false
```

### `optimizations.variable_entity_waking_up`

```toml
#If this value is set to any value > 0, waking up inactive entities happens spread over time, instead of many entities at once. This makes entities feel and behave more natural.
#若设为大于 0，非活跃实体会在一段时间内逐渐被唤醒而非一次性全部唤醒，使实体行为更自然。
#This setting is the coefficient of variation, or σ / μ (the ratio of the standard deviation to the mean) of the inactivity duration.
#本项为变异系数 σ/μ（标准差与均值之比），用于非活跃时长。
#
#In other words, this setting is the value σ, so that the regular inactivity duration will be multiplied by a factor normal_distribution(μ = 1, σ).
#即本项为 σ，常规非活跃时长会乘以服从 normal_distribution(μ = 1, σ) 的系数。
#If a value ≤ 0 is given, variable entity wake-up is disabled.
#若给出 ≤ 0 的值，则禁用可变实体唤醒。
[optimizations.variable_entity_waking_up]
	entity_wakeup_duration_ratio_standard_deviation = 0.2
```

### `optimizations.projectile`

```toml
[optimizations.projectile]
	#Controls how many chunks a projectile can load in its lifetime before it gets automatically removed.
	#单个抛射物在其生命周期内最多可加载的区块数，超过后会被自动移除。
	max-loads-per-projectile = 0
	#Controls how many chunks are allowed to be sync loaded by projectiles in a tick.
	#每 tick 内允许被抛射物同步加载的区块数上限。
	max-loads-per-tick = 0
```

### `optimizations.reduce_sensor_work`

```toml
#When it is enabled, it will delete the line of sight cache less often and use a faster nearby comparison.
#启用后，会减少视线缓存的清理频率，并采用更快的附近实体比较。
[optimizations.reduce_sensor_work]
	#The interval of each entity to drop the cache(in ticks)
	#每个实体丢弃该缓存的间隔（tick）。
	delay_ticks = 10
	enabled = true
```
