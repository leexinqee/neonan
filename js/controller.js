/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module('app.controller', []);

// �ܿ�����
app.controller("globalCtrl",function(){
    console.log('globalCtrl')
});

// ����ֿ�Ŀ�����
app.controller("mainCtrl",function(){

});

// ��ҳ�������ֵĿ�����
app.controller("topCtrl", function($scope){
    console.log('topCtrl')
});

//  ��ർ����������
app.controller("asideLeftCtrl", function($scope){
    console.log('asideLeftCtrl')
});

// �ұߵ���������
app.controller("asideRightCtrl",function($scope){
    console.log('asideRightCtrl');
});

// ������Ϣ���Ϸ���Ϣ��ʾģ���
app.controller("topInfoCtrl", function($scope){
    console.log('topInfoCtrl')
});


// ��������ģ��Ŀ�����
app.controller("topContentCtrl", function($scope){
    console.log('topContentCtrl')
});


// ����ģ���Ϸ��Ĺ����
app.controller("contentTopViewCtrl", function($scope){
    console.log('contentTopViewCtrl')
});



// ��ƵTV ������
app.controller("tvPageCtrl", function($scope){
    console.log('tvPageCtrl')
});


