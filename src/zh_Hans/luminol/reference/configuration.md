# 配置

```toml
# 修复
[fixes]

# 允许虚空交易
[fixes.allow_void_trading]
enabled = false

[fixes.allow_unsafe_teleportation]
#如果你想使用刷沙特性，请打开此项
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

# 服务器名称
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

# 用户名检查
[misc.username_checks]
enabled = true

# Mojang 聊天顺序检查
[misc.mojang_out_of_order_chat_check]
enabled = true

[misc.tpsbar]
# Ping颜色列表
ping_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
# 区块热度颜色列表
chunkhot_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
# 格式
format = "<gray>TPS<yellow>:</yellow> <tps> MSPT<yellow>:</yellow> <mspt> Ping<yellow>:</yellow> <ping>ms ChunkHot<yellow>:</yellow> <chunkhot>"
# TPS颜色列表
tps_color_list = ["GREEN", "YELLOW", "RED", "PURPLE"]
# 启用TPSBAR
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

# 优化实体大脑
# 他们离玩家很远
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
[optimizations.alternative_keepalive_handling]
enabled = false

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

# 窒息优化
[optimizations.suffocation_optimization]
enabled = false

#这些值定义实体的最大寿命。 如果entity 在此列表中，并且其生存时间超过tick 的数量，然后它将被删除。将值设置为-1 禁用此功能。
[optimizations.entity_timeouts]
MOOSHROOM = -1
MAGMA_CUBE = -1
SILVERFISH = -1
MULE = -1
HOGLIN = -1
LEASH_KNOT = -1
HUSK = -1
VINDICATOR = -1
WARDEN = -1
HOPPER_MINECART = -1
PILLAGER = -1
SHULKER_BULLET = -1
VILLAGER = -1
AREA_EFFECT_CLOUD = -1
PAINTING = -1
TURTLE = -1
TRADER_LLAMA = -1
SMALL_FIREBALL = -1
TNT = -1
CAVE_SPIDER = -1
SLIME = -1
DROWNED = -1
FIREBALL = -1
EVOKER = -1
MARKER = -1
EXPERIENCE_BOTTLE = -1
ENDERMITE = -1
AXOLOTL = -1
COMMAND_BLOCK_MINECART = -1
PLAYER = -1
ITEM = -1
TEXT_DISPLAY = -1
SALMON = -1
ZOMBIE = -1
GOAT = -1
STRIDER = -1
PANDA = -1
OCELOT = -1
ENDERMAN = -1
CHEST_MINECART = -1
ZOMBIE_VILLAGER = -1
LLAMA = -1
ENDER_DRAGON = -1
WITCH = -1
EXPERIENCE_ORB = -1
ITEM_FRAME = -1
WITHER = -1
ARROW = -1
CREEPER = -1
ILLUSIONER = -1
BREEZE = -1
CAMEL = -1
COD = -1
ZOMBIE_HORSE = -1
FURNACE_MINECART = -1
RAVAGER = -1
BOAT = -1
SHULKER = -1
SNIFFER = -1
BEE = -1
ITEM_DISPLAY = -1
PHANTOM = -1
BLAZE = -1
SKELETON_HORSE = -1
COW = -1
WANDERING_TRADER = -1
END_CRYSTAL = -1
PIG = -1
ZOGLIN = -1
WOLF = -1
IRON_GOLEM = -1
FROG = -1
SHEEP = -1
VEX = -1
ENDER_PEARL = -1
BLOCK_DISPLAY = -1
TRIDENT = -1
PIGLIN_BRUTE = -1
POLAR_BEAR = -1
MINECART = -1
LIGHTNING_BOLT = -1
POTION = -1
FISHING_BOBBER = -1
CHEST_BOAT = -1
SQUID = -1
DRAGON_FIREBALL = -1
ELDER_GUARDIAN = -1
HORSE = -1
TNT_MINECART = -1
ARMOR_STAND = -1
PARROT = -1
EVOKER_FANGS = -1
FOX = -1
GIANT = -1
STRAY = -1
SPECTRAL_ARROW = -1
CAT = -1
RABBIT = -1
DONKEY = -1
EYE_OF_ENDER = -1
SPAWNER_MINECART = -1
GLOW_ITEM_FRAME = -1
INTERACTION = -1
TROPICAL_FISH = -1
ALLAY = -1
SPIDER = -1
SKELETON = -1
WITHER_SKELETON = -1
CHICKEN = -1
ZOMBIFIED_PIGLIN = -1
SNOWBALL = -1
GLOW_SQUID = -1
SNOW_GOLEM = -1
WITHER_SKULL = -1
PUFFERFISH = -1
GUARDIAN = -1
EGG = -1
LLAMA_SPIT = -1
WIND_CHARGE = -1
FALLING_BLOCK = -1
PIGLIN = -1
GHAST = -1
BAT = -1
DOLPHIN = -1
TADPOLE = -1
FIREWORK_ROCKET = -1
```
