<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './../../components/HelloWorld.vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="header-container">
                    <!-- 用户头像 -->
                    <div class="active"
                        style="height: 50px;width: 50px;background-color: cornflowerblue;border-radius: 50%;"></div>
                    <div>姓名</div>
                    <!-- 退出按钮 -->
                    <el-button type="text" icon="el-icon-exit" @click="handleClickLogout">退出</el-button>
                </div>
            </el-header>
            <el-container>
                <el-aside width="60px">
                    <div class="aside-container">
                        <div class="avatar-container">
                            <div v-for="item in chatList" class="avatarImg" @click="">
                                <el-avatar :src="item.avatar">{{ item.name }}</el-avatar>
                            </div>
                        </div>
                        <div class="setting">
                            <el-icon>
                                <Setting />
                            </el-icon>
                        </div>
                    </div>

                </el-aside>
                <el-container>
                    <el-main>
                        <RouterView />
                    </el-main>
                    <el-footer style="background-color:aqua;">
                        <div>
                            Footer
                        </div>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts">
import { reactive } from 'vue'
const handleClickLogout = () => {
    console.log('退出');
}
const chatList = [
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 2,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 3,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 4,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },
    {
        id: 1,
        type: 'people',
        name: 'Doe',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: 2
    },

]
</script>
<style scoped lang="scss">
.common-layout {
    min-height: 100vh;
    width: 100%;
    background-color: #e9e6e9
}

.header-container {
    height: 60px;
    background-color: azure;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.aside-container {
    height: calc(100vh - 60px);
    background-color: #f0f2f5;
    
    position: relative;
    padding-bottom: 60px;
    .avatar-container {
        height: 100%;
        overflow-y: scroll;
    }

    .avatarImg {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e9e6e9;
        cursor: pointer;
    }

    .setting {
        height: 60px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #777a7d;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .el-icon {
            color: #fff;
            font-size: 20px;
        }
    }
}
</style>
