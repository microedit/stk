parText=[]
parText['buydays']='下跌行情连跌天数'
parText['selldays']='下跌行情连涨天数'
parText['buyPriceRate']='下跌行情买入价与收盘价比例'
parText['sellPriceRate']='下跌行情卖出价与收盘价比例'
parText['ma1']='下跌行情短均线1'
parText['ma2']='下跌行情长均线2'
parText['minprofit']='下跌行情卖的最小盈利'

parText['ubuydays']='上升行情连跌天数'
parText['uselldays']='上升行情连涨天数'
parText['ubuyPriceRate']='上升行情买入价与收盘价比例'
parText['usellPriceRate']='上升行情卖出价与收盘价比例'
parText['uma1']='上升行情短均线1'
parText['uma2']='上升行情长均线2'
parText['uminprofit']='上升行情卖的最小盈利'


//探索最佳参数
function teststep(this1) { 
	testmod='teststep'
//	this1.form.strdate.value="20160311";
//	this1.form.enddate.value="20160527";
	var fld1=this1.form.buydays, from1=1, to1=9, step1=1; //下跌行情连跌天数
	var fld2=this1.form.selldays, from2=1, to2=9, step2=1; //下跌行情连涨天数
//	var fld1=this1.form.ubuydays, from1=1, to1=10, step1=1; //上升行情连跌天数
//	var fld2=this1.form.uselldays, from2=1, to2=10, step2=1; //上升行情连涨天数
//	var fld1=this1.form.minprofit, from1=1.04, to1=1.10, step1=0.01; //下跌行情卖的最小盈利
//	var fld2=this1.form.uminprofit, from2=0.95, to2=1.02, step2=0.01; //上升行情卖的最小盈利
//	var fld1=this1.form.ma1, from1=1, to1=8, step1=1; //下跌行情短均线1
//	var fld2=this1.form.ma2, from2=10, to2=80, step2=10;//下跌行情长均线2
//	var fld3=this1.form.uma1, from1=1, to1=8, step1=1; //上升行情短均线1
//	var fld4=this1.form.uma2, from2=10, to2=80, step2=10;//上升行情长均线2
//	var fld1=this1.form.buyPriceRate, from1=0.96, to1=1.04, step1=0.01;
//	var fld2=this1.form.sellPriceRate, from2=0.96, to2=1.04, step2=0.01;
//	var fld3=this1.form.ubuyPriceRate, from1=0.96, to1=1.04, step1=0.01;
//	var fld4=this1.form.usellPriceRate, from2=0.96, to2=1.04, step2=0.01;

//	var fld1=this1.form.minprofit, from1=1.04, to1=1.10, step1=0.01; //下跌行情卖的最小盈利
//	var fld2=this1.form.uminprofit, from2=0.95, to2=1.02, step2=0.01; //上升行情卖的最小盈利
//	var fld1=this1.form.ma1, from1=1, to1=8, step1=1;    //下跌行情短均线1
//	var fld2=this1.form.ma2, from2=10, to2=80, step2=10; //下跌行情长均线2
//	var fld3=this1.form.uma1, from1=1, to1=8, step1=1;   //上升行情短均线1
//	var fld4=this1.form.uma2, from2=10, to2=80, step2=10;//上升行情长均线2
//	var fld1=this1.form.buyPriceRate, from1=0.96, to1=1.04, step1=0.01;   //下跌行情买入价与收盘价比例
//	var fld2=this1.form.sellPriceRate, from2=0.96, to2=1.04, step2=0.01;  //下跌行情卖出价与收盘价比例
//	var fld3=this1.form.ubuyPriceRate, from1=0.96, to1=1.04, step1=0.01;  //上升行情买入价与收盘价比例
//	var fld4=this1.form.usellPriceRate, from2=0.96, to2=1.04, step2=0.01; //上升行情卖出价与收盘价比例

	for (var v1= from1; v1 <= to1; v1+=step1) {
		fld1.value=v1;
//		fld3.value=v1;
		for (var v2= from2; v2<= to2; v2+=step2) {
			fld2.value=v2;
//			fld4.value=v2;
			testpool(this1, "n");
		}
	}
	dspcsv(this1.form.stkpool1.value,'t');
}


function runbest() {
	confirm("本功能暂不可用。") 
	return
//	confirm("commandLine="+MYSTK.commandLine)
	var args = MYSTK.commandLine.split(" ");
	var this1=G("stkform").enddate
	var j=1
	this1.form.strdate.value = 20120101
	this1.form.enddate.value = 20160608
	f1 = "best" + this1.form.strdate.value + this1.form.enddate.value + ".txt"
	eval( readfile( f1 ) );
//	confirm("args1="+args[1])
	if(args[1]==="" || args[1]===undefined) {
		appendfile(f1,'// best test time='+ Date().toLocaleString() + "\r\n"); //string.Format("{0:yyyyMMddHHmmssffff}", Date()) +
		appendfile(f1,'\tthis1.form.strdate.value=' + this1.form.strdate.value + "\r\n"); // 开始日期 
		appendfile(f1,'\tthis1.form.enddate.value=' + this1.form.enddate.value + " \r\n");// 结束日期
//		cmd('stk8.hta ' + j)
	} else {
		j= Number(args[1])
	}
//	confirm("j="+j+ " this1="+this1.getAttribute('Name'))
	procbest(j,this1)
	j ++
	cmd('stk8.hta ' + j )
	self.close()
}


function timerbest() {
	if (!confirm("本功能将对所有参数组合进行穷举海量选优，可能运行几个小时无响应，是否运行？")) {
		return
	}
	var args = MYSTK.commandLine.split(" ");
	var this1=G("stkform").enddate
	var j=1
	f1 = "best" + this1.form.strdate.value + "-" + this1.form.enddate.value + ".txt"
	eval( readfile( f1 ) );
//	confirm("args1="+args[1])
	if(args[1]==="" || args[1]===undefined) {
		appendfile(f1,'// best test time='+ Date().toLocaleString() + "\r\n"); //string.Format("{0:yyyyMMddHHmmssffff}", Date()) +
		appendfile(f1,'\tthis1.form.strdate.value=' + this1.form.strdate.value + "\r\n"); // 开始日期 
		appendfile(f1,'\tthis1.form.enddate.value=' + this1.form.enddate.value + " \r\n");// 结束日期
//		cmd('stk8.hta ' + j)
	} else {
		var j= Number(args[1])
	}
	//	confirm("j="+j+ " this1="+this1.getAttribute('Name'))
	timer1(j,this1)
}

function timer1(j,this1) {
	procbest(j,this1)
	j++
	setTimeout(function(){ timer1(j,this1) }, 2);	
}

function procbest(j, this1) {
	switch(j) {
		case 1:	best1(this1.form.buydays, 1, 9, 1); //下跌行情连跌天数
				break;
		case 2:	best1(this1.form.selldays, 1, 9, 1); //下跌行情连涨天数
				break;
		case 3:	best1(this1.form.buyPriceRate,  0.96, 1.04, 0.01);   //下跌行情买入价与收盘价比例
				break;
		case 4:	best1(this1.form.sellPriceRate, 0.96, 1.04, 0.01);  //下跌行情卖出价与收盘价比例
				break;
		case 5:	best1(this1.form.ma1,   1,  8,  1); //下跌行情短均线1
				break;
		case 6:	best1(this1.form.ma2,  10, 80, 10);//下跌行情长均线2
				break;
		case 7:	best1(this1.form.minprofit,  1.04, 1.15, 0.01); //下跌行情卖的最小盈利
				break;

		case 8:	best1(this1.form.ubuydays, 1, 10, 1); //上升行情连跌天数
				break;
		case 9:	best1(this1.form.uselldays, 1, 10, 1); //上升行情连涨天数
				break;
		case 10:	best1(this1.form.ubuyPriceRate, 0.96, 1.04, 0.01);  //上升行情买入价与收盘价比例
				break;
		case 11:	best1(this1.form.usellPriceRate,0.96, 1.04, 0.01); //上升行情卖出价与收盘价比例
				break;
		case 12:	best1(this1.form.uma1,  1,  8,  1); //上升行情短均线1
				break;
		case 13:	best1(this1.form.uma2, 10, 80, 10);//上升行情长均线2
				break;
		case 14:	best1(this1.form.uminprofit, 0.95, 1.1, 0.01); //上升行情卖的最小盈利

				break;
		case 15:	best1(this1.form.rebuyrate, 0.8, 0.96, 0.01); //上升行情卖的最小盈利
				break;
		case 16:	best1(this1.form.urebuyrate, 0.8, 0.96, 0.01); //上升行情卖的最小盈利
				break;
		case 17:	best1(this1.form.suprebuyrate, 0.65, 0.85, 0.01); //上升行情卖的最小盈利
				break;
		case 18:	best1(this1.form.usuprebuyrate, 0.65, 0.85, 0.01); //上升行情卖的最小盈利

				break;
		case 19:	best1(this1.form.maxprofit, 1.2, 2.0, 0.1); //下跌行情卖的最小盈利
				break;
		case 20:	best1(this1.form.umaxprofit,1.2, 2.0, 0.1); //上升行情卖的最小盈利
				break;
		case 21:	best1(this1.form.maxlost, 0.4, 0.8, 0.02); //下跌行情卖的最小盈利
				break;
		case 22:	best1(this1.form.umaxlost, 0.4, 0.8, 0.02); //上升行情卖的最小盈利
				break;
		case 23:	best1(this1.form.maxcost, 20000, 100000, 10000, 'L'); //下跌行情一种股票最大投入
				break;
		case 24:	best1(this1.form.umaxcost, 20000, 100000, 10000, 'L'); //上升行情一种股票最大投入
		
					appendfile(f1,'// end time='+ Date().toLocaleString() + "\r\n"); //string.Format("{0:yyyyMMddHHmmssffff}", Date()) +
					dspcsv(this1.form.stkpool1.value,'t');
					break;
		default: 	self.close();
	}
}

function bestall(this1) { 
	var date1 = new Date()
	appendfile('best.txt','// best test time='+ Date().toLocaleString() + "\r\n"); //string.Format("{0:yyyyMMddHHmmssffff}", Date()) +
	appendfile('best.txt','\tthis1.form.strdate.value=' + this1.form.strdate.value + "\r\n"); // 开始日期 
	appendfile('best.txt','\tthis1.form.enddate.value=' + this1.form.enddate.value + " \r\n");// 结束日期

	best1(this1.form.buydays, 1, 9, 1); //下跌行情连跌天数
	best1(this1.form.selldays, 1, 9, 1); //下跌行情连涨天数
	best1(this1.form.buyPriceRate,  0.96, 1.04, 0.01);   //下跌行情买入价与收盘价比例
	best1(this1.form.sellPriceRate, 0.96, 1.04, 0.01);  //下跌行情卖出价与收盘价比例
	best1(this1.form.ma1,   1,  8,  1); //下跌行情短均线1
	best1(this1.form.ma2,  10, 80, 10);//下跌行情长均线2
	best1(this1.form.minprofit,  1.04, 1.15, 0.01); //下跌行情卖的最小盈利

	best1(this1.form.ubuydays, 1, 10, 1); //上升行情连跌天数
	best1(this1.form.uselldays, 1, 10, 1); //上升行情连涨天数
	best1(this1.form.ubuyPriceRate, 0.96, 1.04, 0.01);  //上升行情买入价与收盘价比例
	best1(this1.form.usellPriceRate,0.96, 1.04, 0.01); //上升行情卖出价与收盘价比例
	best1(this1.form.uma1,  1,  8,  1); //上升行情短均线1
	best1(this1.form.uma2, 10, 80, 10);//上升行情长均线2
	best1(this1.form.uminprofit, 0.95, 1.10, 0.01); //上升行情卖的最小盈利

	dspcsv(this1.form.stkpool1.value,'t');
}

//单字段最佳参数探索, 返回(盈利*年化收益率)最大化的参数。如果要求 年化利率最大化，则需要修改函数dspcsv的返回值。
// biggest=L, 当多个参数值有相同的盈利时，返回最小值，否则返回最大值
function best1(this1, from1, to1, step1, biggest) {
	var fldname=this1.getAttribute('Name')
//	confirm("best1.this1="+fldname)
	var max1=undefined, bestv1
	var v1= from1 
	for (; v1 <= to1; v1+=step1) {
		this1.value=v1;
		oldtitle=document.title
		document.title = oldtitle+': testing ' + parText[fldname] + fldname + '=' + v1
		setTimeout(function(){ ; }, 1);
		document.title=oldtitle
		var new1=testpool(this1, "n");
//		var new1=wait(testpool(this1, "n"));
		if (max1===undefined || max1 < new1) {
			max1 = new1;
			bestv1 = v1;
		}
		if (max1 == new1 && biggest!='L') {
			bestv1 = v1;
		}
	}
	this1.value= bestv1;
	appendfile(f1,'\tthis1.form.'+ this1.getAttribute('Name') + '.value = '+ bestv1 + " \r\n"); //+ parText[this1.getAttribute('Name')] +
	return bestv1;
}

function wait(f1, this1) {
	setTimeout(function(){ best1(this1.timepar,"n")}, 10);
}

//2012最佳参数：
function best2012(this1) {
	this1.form.strdate.value=20120101
	this1.form.enddate.value=20160608 
	this1.form.buydays.value = 3 
	this1.form.selldays.value = 8 
	this1.form.buyPriceRate.value = 1 
	this1.form.sellPriceRate.value = 1.02 
	this1.form.ma1.value = 8 
	this1.form.ma2.value = 80 
	this1.form.minprofit.value = 1.04 
	this1.form.ubuydays.value = 2 
	this1.form.uselldays.value = 10 
	this1.form.ubuyPriceRate.value = 0.96 
	this1.form.usellPriceRate.value = 1.01 
	this1.form.uma1.value = 1 
	this1.form.uma2.value = 80 
	this1.form.uminprofit.value = 0.95 
	this1.form.rebuyrate.value = 0.95
	this1.form.urebuyrate.value = 0.86
	this1.form.suprebuyrate.value = 0.65 
	this1.form.usuprebuyrate.value = 0.74
	this1.form.maxprofit.value = 1.2 
	this1.form.umaxprofit.value = 1.9
	this1.form.maxlost.value = 0.72
	this1.form.umaxlost.value = 0.74
}

//2016最佳参数：
function best2016(this1) {
/*	
	this1.form.buydays.value=3; //下跌行情连跌天数
	this1.form.selldays.value=4; //下跌行情连涨天数
	this1.form.ubuydays.value==2; //上升行情连跌天数
	this1.form.uselldays.value=8; //上升行情连涨天数
	this1.form.minprofit.value=1.04; //下跌行情卖的最小盈利
	this1.form.uminprofit.value=1.06; //上升行情卖的最小盈利
	this1.form.ma1.value=8; //下跌行情短均线1
	this1.form.ma2.value=60;//下跌行情长均线2
	this1.form.uma1.value=8; //上升行情短均线1
	this1.form.uma2.value=60;//上升行情长均线2
	this1.form.buyPriceRate.value=1.01;  //下跌行情买入价与收盘价比例
	this1.form.sellPriceRate.value=0.99; //下跌行情卖出价与收盘价比例
	this1.form.ubuyPriceRate.value=1.01; //上升行情买入价与收盘价比例
	this1.form.usellPriceRate.value=0.99;//上升行情卖出价与收盘价比例
*/
/*
// best test time=Sun Jul 03 15:50:00 2016
	this1.form.strdate.value=20160101
	this1.form.enddate.value=20160703 
	this1.form.buydays.value = 3 
	this1.form.selldays.value = 2 
	this1.form.buyPriceRate.value = 1.04 
	this1.form.sellPriceRate.value = 0.98 
	this1.form.ma1.value = 8 
	this1.form.ma2.value = 70 
	this1.form.minprofit.value = 1.09 
	this1.form.ubuydays.value = 7 
	this1.form.uselldays.value = 1 
	this1.form.ubuyPriceRate.value = 1.01 
	this1.form.usellPriceRate.value = 1 
	this1.form.uma1.value = 4 
	this1.form.uma2.value = 70 
	this1.form.uminprofit.value = 0.97 
	this1.form.rebuyrate.value = 0.9500000000000002 
	this1.form.urebuyrate.value = 0.9500000000000002 
	this1.form.suprebuyrate.value = 0.7800000000000001 
	this1.form.usuprebuyrate.value = 0.8400000000000002 
	this1.form.maxprofit.value = 1.9000000000000005 
	this1.form.umaxprofit.value = 1.9000000000000005 
	this1.form.maxlost.value = 0.7600000000000003 
	this1.form.umaxlost.value = 0.7800000000000004 
	this1.form.maxcost.value = 50000 
	this1.form.umaxcost.value = 50000 
// end time=Sun Jul 03 16:18:09 2016
*/
// best test time=20161212
	this1.form.strdate.value=20160101
//	this1.form.enddate.value=20161212 
	this1.form.buydays.value = 3 
	this1.form.selldays.value = 2 
	this1.form.buyPriceRate.value = 1.02 
	this1.form.sellPriceRate.value = 0.99 
	this1.form.ma1.value = 6
	this1.form.ma2.value = 60 
	this1.form.minprofit.value = 1.01
	this1.form.ubuydays.value = 5
	this1.form.uselldays.value = 2 
	this1.form.ubuyPriceRate.value = 1.0 
	this1.form.usellPriceRate.value = 1.0
	this1.form.uma1.value = 6 
	this1.form.uma2.value = 60 
	this1.form.uminprofit.value = 1.0 
	this1.form.rebuyrate.value = 0.9
	this1.form.urebuyrate.value = 0.95
	this1.form.suprebuyrate.value = 0.8
	this1.form.usuprebuyrate.value = 0.8
	this1.form.maxprofit.value = 1.90
	this1.form.umaxprofit.value = 1.3 
	this1.form.maxlost.value = 0.74
	this1.form.umaxlost.value = 0.78
	this1.form.maxcost.value = 30000 
	this1.form.umaxcost.value = 30000
}

function best2016a(this1) {
// best test time=Mon Jun 13 23:31:08 2016
	this1.form.strdate.value=20160101
//	this1.form.enddate.value=20160613 
	this1.form.buydays.value = 3 
	this1.form.selldays.value = 2 
	this1.form.buyPriceRate.value = 1.00
	this1.form.sellPriceRate.value = 1.01 
	this1.form.ma1.value = 5
	this1.form.ma2.value = 60 
	this1.form.minprofit.value = 1.01
	this1.form.ubuydays.value = 3
	this1.form.uselldays.value = 2 
	this1.form.ubuyPriceRate.value = 1.00
	this1.form.usellPriceRate.value = 1.01
	this1.form.uma1.value = 5
	this1.form.uma2.value = 60 
	this1.form.uminprofit.value = 1.01 
	this1.form.rebuyrate.value = 0.95
	this1.form.urebuyrate.value = 0.95
	this1.form.suprebuyrate.value = 0.8
	this1.form.usuprebuyrate.value = 0.8
	this1.form.maxprofit.value = 1.9
	this1.form.umaxprofit.value = 1.9 
	this1.form.maxlost.value = 0.7
	this1.form.umaxlost.value = 0.7
	this1.form.maxcost.value =  50000 
	this1.form.umaxcost.value = 50000 
}

//2015最佳参数：
function best2015(this1) {
	this1.form.strdate.value="20150101";
	this1.form.enddate.value="20151231";

	/*	this1.form.buydays.value=3; //下跌行情连跌天数
	this1.form.selldays.value=2; //下跌行情连涨天数
	this1.form.ubuydays.value==3; //上升行情连跌天数
	this1.form.uselldays.value=2; //上升行情连涨天数
	this1.form.minprofit.value=1.04; //下跌行情卖的最小盈利
	this1.form.uminprofit.value=0.95; //上升行情卖的最小盈利
	this1.form.ma1.value=8; //下跌行情短均线1
	this1.form.ma2.value=60;//下跌行情长均线2
	this1.form.uma1.value=6; //上升行情短均线1
	this1.form.uma2.value=60;//上升行情长均线2
	this1.form.buyPriceRate.value=1.01;  //下跌行情买入价与收盘价比例
	this1.form.sellPriceRate.value=0.99; //下跌行情卖出价与收盘价比例
	this1.form.ubuyPriceRate.value=1.01; //上升行情买入价与收盘价比例
	this1.form.usellPriceRate.value=0.99;//上升行情卖出价与收盘价比例
*/

// best test time=Thu Jun 09 15:19:38 2016
	this1.form.buydays.value = 2 
	this1.form.selldays.value = 2 
	this1.form.buyPriceRate.value = 1.01 
	this1.form.sellPriceRate.value = 1.04 
	this1.form.ma1.value = 7 
	this1.form.ma2.value = 60 
	this1.form.minprofit.value = 1.04 
	this1.form.ubuydays.value = 7 
	this1.form.uselldays.value = 4 
	this1.form.ubuyPriceRate.value = 0.97 
	this1.form.usellPriceRate.value = 1.04 
	this1.form.uma1.value = 5 
	this1.form.uma2.value = 20 
	this1.form.uminprofit.value = 0.96 
}

// 生成需要每天步进预先计算数值，才能便于后续策略使用的变量
function userfun() {
	if (ref(close1,0)>ref(close1,1) ) {
		up +=1
		crossdown=down
		crossup=0
		down =0
	} else {  // 价格不变当作跌
		down +=1
		crossdown=0
		crossup=up
		up = 0
	}
	KDJ.J(); 
	MACD.DEA();
}


// buysell1升跌行情切换买卖函数。返回sellprice, selvol, buyprice, buyvol 买卖价格和成交量
function buysell1() {
			if (MA(close1,ma1) <= MA(close1,ma2)) { //下跌行情
				if ( sumvol>0 && ( ref(close1,0)*sumvol > -cost * minprofit || datediff(ref(date1,0),datebak) > maxdays ) ) { //卖出
					if (sell()) sellIt()
				}
				if ( sumvol>0 && (ref(close1,0)*sumvol > -cost * maxprofit || ref(close1,0)*sumvol < -cost * maxlost)) {  // 超过止盈或止损价全卖
					sellprice=ref(close1,0)*sellPriceRate
					sellvol=sumvol
				}
				
				if (-cost < maxcost && (sumvol==0 || -cost/sumvol*rebuyrate>ref(close1,0)))
					if(buy()) buyIt()
				if (-cost < maxcost && (sumvol>0 && -cost/sumvol *suprebuyrate>ref(close1,0)) ) { // 超跌无条件补仓买入
					buyprice=ref(close1,0)*buyPriceRate
					buyvol = Math.round(maxbuyamount/buyprice/100) * 100;
				}
			} else if (MA(close1,uma1) > MA(close1,uma2) ) { //上涨行情 取消条件&& MA(close1,uma3) > MA(close1,uma4)
				if ( sumvol>0 && ( ref(close1,0)*sumvol > -cost * uminprofit || datediff(ref(date1,0),datebak) > umaxdays ))
					if (sell()) {
						sellprice=ref(close1,0)*usellPriceRate
						sellvol=sumvol
					}
				if ( sumvol>0 && ( ref(close1,0)*sumvol > -cost * umaxprofit || ref(close1,0)*sumvol < -cost * umaxlost ) 
					) {  // 超过止盈或止损价全卖
					sellprice=ref(close1,0)*usellPriceRate
					sellvol=sumvol
				}
				if (-cost < umaxcost && (sumvol==0 || -cost/sumvol*urebuyrate>ref(close1,0) ))
				{	if(buy()) {
						buyprice=ref(close1,0)*ubuyPriceRate
						buyvol = Math.round(maxbuyamount/buyprice/100) * 100;
					}
				}	
				if (-cost < umaxcost && (sumvol>0 && -cost/sumvol *usuprebuyrate>ref(close1,0) )) { // 超跌无条件补仓买入
					buyprice=ref(close1,0)*ubuyPriceRate
					buyvol = Math.round(umaxbuyamount/buyprice/100) * 100;
				}
			}
}

// bug 
function buysell2() {
	//卖出条件
	if (sumvol>0)  	{ //持仓大于0
		if (((MA(close1,ma1) <= MA(close1,ma2)) 						//下跌行情
			&& ( ( sell() && ref(close1,0)*sumvol > -cost * minprofit		//卖出信号且达到最小盈利
				|| datediff(p1[i][date1],datebak) > maxdays   	//持仓天数超长
				|| ( ref(close1,0)*sumvol > -cost * maxprofit) 	//超过止盈
				|| (ref(close1,0)*sumvol < -cost * maxlost)  	//止损价全卖
				)
				))
		) { //卖出
			sellIt()
		}
		if (MA(close1,uma1) > MA(close1,uma2) ) { //上涨行情 取消条件&& MA(close1,uma3) > MA(close1,uma4)
			if ( (sell() && ref(close1,0)*sumvol > -cost * uminprofit)  // 卖出信号且达到最小盈利
				|| datediff(p1[i][date1],datebak) > umaxdays // 持仓天数超长
				|| ref(close1,0)*sumvol > -cost * umaxprofit // 超过止盈
				|| ref(close1,0)*sumvol < -cost * umaxlost   // 止损价全卖
				) { 
				sellIt();
			}
		}
	}
	// 买入条件
	if  (-cost < maxcost ) { // 股票成本没有满仓（小于最大投入50000）
		if (MA(close1,ma1) <= MA(close1,ma2)) {//下跌行情
			if ( (sumvol==0 || -cost/sumvol*rebuyrate>p1[i][close1] )) //空仓 或 市价低于补仓价
				if(buy()) buyIt();
			if ( (sumvol>0 && -cost/sumvol *suprebuyrate>p1[i][close1]) ) { // 超跌无条件补仓买入
				buyprice=ref(close1,0)*buyPriceRate
				buyvol = Math.round(maxbuyamount/buyprice/100) * 100;
			}
			if (-cost < umaxcost && (sumvol==0 || -cost/sumvol*rebuyrate>p1[i][close1] )) {
				if(buy()) buyIt();
			}
		}
		if (MA(close1,uma1) > MA(close1,uma2) ) { //上涨行情 取消条件&& MA(close1,uma3) > MA(close1,uma4)
			if ( (sumvol==0 || -cost/sumvol*urebuyrate>p1[i][close1] )) //空仓 或 市价低于补仓价
				if(buy()) buyIt();
			if ( (sumvol>0 && -cost/sumvol *usuprebuyrate>p1[i][close1]) ) { // 超跌无条件补仓买入
				buyprice=ref(close1,0)*ubuyPriceRate
				buyvol = Math.round(umaxbuyamount/buyprice/100) * 100;
			}
		}
	}
}

// buysellKDJ买卖函数 kdj。返回sellprice, selvol, buyprice, buyvol 买卖价格和成交量
//   kdj.j < 0 买， kdj.j > 100 卖，
function buysell_KDJ() {
	if ( -cost < maxcost && (sumvol==0 || -cost/sumvol*rebuyrate>ref(close1,0)) ) { //未满仓且低于补仓价
		if (KDJ.J() < 0 ) {
			buyIt();
			//if(ref(date1,0)>=20151231 ) confirm("buyIt "+ref(date1,0)+" price="+buyprice+" K="+KDJ.K()+ " D="+KDJ.D()+" J="+KDJ.J());
		}
	}
	if ( sumvol>0 && ( ref(close1,0)*sumvol > -cost * minprofit || datediff(ref(date1,0),datebak) > maxdays )) {
		if ( KDJ.J() > 100 ) sellIt();
	}
	//if(ref(date1,0)>20151231 ) confirm("every "+ref(date1,0)+" K="+KDJ.K()+ " D="+KDJ.D()+" J="+KDJ.J()+" cost="+cost+" sumvol="+sumvol+ "rebuyrate="+ rebuyrate+" buyprice="+buyprice);
}

// buysell买卖仓位策略函数，调用买卖函数，返回sellprice, selvol, buyprice, buyvol 确定买卖价格和股数
function buysellPOS() {
	if (-cost < maxcost && (sumvol==0 || -cost/sumvol*rebuyrate>ref(close1,0)) ) { //买入仓位策略
		if(buy()) buyIt();
	} else {
		if ( sumvol>0 && ( ref(close1,0)*sumvol > -cost * minprofit || datediff(ref(date1,0),datebak) > maxdays ))//卖出仓位策略
			if(sell()) sellIt();
	}
}

function buysell_crossup() {
	if (crossdown>=3 && -cost<maxcost && (sumvol ==0 || ref(close1,0) < -cost/sumvol*rebuyrate) ) buyIt();
	if (crossup>=3 && sumvol>0 && ref(close1,0)>-cost/sumvol) sellIt(); 
}

function buysell_downup3() {
	if (down>=5 && -cost<maxcost && (sumvol ==0 || ref(close1,0) < -cost/sumvol*rebuyrate) ) buyIt();
	if (up>=3 && sumvol>0 && ref(close1,0)>-cost/sumvol) sellIt(); 
}

function buysell_downup() {
	buy=downnday2buy	//买入策略
	sell=upnday2sell	//卖出策略
}

function upnday2sell() { // upnday sell， ma1>ma60 for updays + 1
	return  ( (up>=updays  && MA(close1,ma1)<=MA(close1,ma2) ) || 
		 (up>=uupdays && MA(close1,uma1)> MA(close1,uma2)) )	
}

function downnday2buy() { // downnday buy, ma1<ma60 for downdays - 1 
	return ((down>=downdays  && MA(close1,ma1) <= MA(close1,ma2)  ) ||  // && ref(close1,0)<MA(close1,20)
	(down>=udowndays && MA(close1,uma1)>  MA(close1,uma2))) 
}
	
function buysell_downup2() {
buysell=buysell2  // some bug
buy=downndaybuy 	//买入策略
sell=upndaysell		//卖出策略
}
function UPNDAY(type,n) { // upnday sell
	for (var i=0; ref(type,i)>=ref(type,i+1) && i<n; i++) {};
	if ( i >= n ) {return true} else {return false};
}

function downndaybuy() { // downnday buy
	return  ( down>=downdays ) 
}

function upndaysell() { // upnday sell
	return  ( up>=updays ) 
}

function DOWNNDAY(type,n) { // downnday 
	for (var i=0; ref(type,i)<ref(type,i+1) && i<n; i++) {};
	if ( i >= n ) {return true} else {return false};
}

function changeCondition(this1) {
	//根据用户界面选择买卖策略，设置买卖函数
	switch(this1.form.conditionSTK.value) {
		case 'buysell1': 
			buysell = buysell1; //分上升和下跌行情，upnday/downnday买卖
			buy=downnday2buy	//买入策略
			sell=upnday2sell	//卖出策略
			break;
		case 'kdj':
			buysell = buysell_KDJ; // kdj buy sell 
			break;
		case 'downup':
			buysell=buysell_downup;
			break;
		case 'downup3':
			buysell=buysell_downup3;
			break;
		case 'crossup':
			buysell=buysell_crossup;
			break;
		case 'buysellpos':
			buysell=buysellPOS;	//仓位策略
			break;
		default:
			buysell=function() {
				//函数尚未设计
			}
	}
	str1="<xmp>"+buysell+'</xmp>';
	G('condition1').innerHTML=str1;
}

function escape2Html(str) { 
 var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}; 
 return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];}); 
} 
function Html2escape(str) { 
 var arrEntities={'<':'&lt;','>':'&gt;',' ':'&nbsp;','&':'&amp;','"':'&quot;'}; 
 return str.replace(/(<|>| |&|");/ig,function(all,t){return arrEntities[t];}); 
} 

// 当前持仓头寸是否可以买入
function positionbuy() {
	if (-cost < maxcost && (sumvol==0 || -cost/sumvol*rebuyrate>ref(close1,0)) ) {
		return true;
	} else { 
		return false;
	}
}

// 当前持仓头寸是否可以卖出
function positionSell() {
	if ( sumvol>0 && ( ref(close1,0)*sumvol > -cost * minprofit || datediff(ref(date1,0),datebak) > maxdays )) {
		return true;
	} else { 
		return false;
	}
}


function p20buy() {
	return ( MA(C,60)>MA(C,120) && MACD.DIF()<0 && KDJ.J()<50 && CROSS ("p20buyA",KDJ.J(),KDJ.D()) || MA(C,60)>MA(C,120) && (MACD.DIF()<0 && DOWNNDAY(C,4))) 
}

function p20sell() {
	return  (MA(C,120)>MA(C,250) && MA(C,60)>MA(C,120) && MA(C,20)>MA(C,60) && CROSS("p20sellA",MA(C,10),C) && MACD.DIF()>0) 
}

function diabuy() {
	//ENTERLONG:MACD.DIF<0 AND CROSS(KDJ.J,KDJ.D) AND KDJ.D<50 AND MA(C,120)>MA(C,250) AND MA(C,250)>MA(C,500);
//	confirm("CROSS="+CROSS("diabuy",KDJ.J(),KDJ.D())+"MACD.DIF="+MACD.DIF()+" KDJ.J="+KDJ.J()+" KDJ.D="+KDJ.D()+" MA(C,120)="+MA(C,120)+" MA(C,250)="+MA(C,250)+" MA(C,500)="+MA(C,500))
	return ( MACD.DIF()<0 && CROSS("diabuy",KDJ.J(),KDJ.D()) && KDJ.D()<50 && MA(C,12)>MA(C,25) && MA(C,25)>MA(C,50)) 
}
function diasell() {
	// EXITLONG: C>1.5*REF(C,BARSLAST(ENTERLONG))  
	return ( ref(close1,0)*sumvol > 1.5* (-cost) ) 
}

function kdjbuy() {  
	return (CROSS("KDJ.J1",KDJ.J(),0)) 
}

function kdjsell() { 
	return  ( CROSS("KDJ.J2",KDJ.J(),100) ) 
}

//买入的定价和数量策略
function buyIt() { 
		buyprice=ref(close1,0)*buyPriceRate
		buyvol = Math.round(maxbuyamount/buyprice/100) * 100;
}

//卖出的定价和数量策略,清仓卖出
function sellIt() {
	sellprice=ref(close1,0)*sellPriceRate;
	sellvol=sumvol;
	/* 减仓策略: 盈利全卖,亏损则:如果持仓>1.5万,减仓1万,否则不卖.
	if ( -cost<sellprice*sumvol) {
		sellvol=sumvol;	// 盈利，全卖
	} else if (sellprice*sumvol > 1.5*maxbuyamount) {					//减仓条件：亏损且持仓>1.5倍单次买入金额
			sellvol = Math.round(maxbuyamount/sellprice/100) * 100; 	//减仓卖出单次买入的金额，大概1万元
		} else sellvol = 0;  // 不卖
	*/
}

function macd2() {
	return ( MACD.DIF() < 0 ) 
}

function crossbuy() {  // crossdown buy
	return  ((crossdown>=downdays && ref(close1,0)<MA(close1,60)) || (crossdown>=downdays-1 && ref(close1,0)>MA(close1,60))) 
}
function crosssell() { // crossup sell, maxprofit止盈，maxcost止损
	return  ((crossup>=updays && ref(close1,0)*sumvol>-cost) || ref(close1,0)*sumvol/cost>maxprofit || ref(close1,0)*sumvol>maxcost ) 
}


function d1buy() {  // down 1% buy
	buyPriceRate = 0.99
	return true
}
function u1sell() { // up 1% sell, maxprofit止盈，maxcost止损
	sellPriceRate = 1.01
	return true
}

function ma1buy() {
	return (ref(close1,0)>MA(close1,10))
}
function ma1sell() {
	return (ref(close1,0)<MA(close1,10))
}


function BIASbuy() {
	ma1=MA(close1,10)
	return (ref(close1,1)<=ma1*0.96 && ref(close1,0)>ma1*0.96)
}
function BIASsell() {
	ma1=MA(close1,10)
	return (ref(close1,1)>=ma1*1.04 && ref(close1,0)<ma1*1.04)
}

function ref(type,n) {
	if (n<0 || curi-n<2) {
		return null
	} else {
		return p1[curi-n][type];
	}
}

function MA(type,n) {
	if (n<1 || curi-n < 2) {
		return null
	}
	for (var i=curi-n+1, ma1=0;i<=curi;i++) {
		ma1 += p1[i][type]
	}
//	confirm("ma1="+ma1)
	return ma1/n;
}
function LLV(type,n) { // n日的type价的最小值，如 llv(low1,n)是n日内最低价的最小值。
	if (n<1) {
		return null
	}
	var temp1 = ref(type,0)
	for (i1=1;i1<n && curi-i1>=2;i1++) {
//		confirm("LLV="+temp1+" ref="+ref(type,i1)+" i1="+i1+" n="+n)
		if (temp1 > ref(type,i1)) {
			temp1 = ref(type,i1);
		}
	}
//	confirm("LLV="+temp1+" type="+type)
	return temp1;
}

function HHV(type,n) { // n日的type价的最大值，如 hhv("high1",n)是n日内最高价的最大值。
	if (n<1) {
		return null
	}
	var temp1 = ref(type,0)
	for (i1=1;i1<n && curi-i1>=2;i1++) {
		if (temp1 < ref(type,i1)) {
			temp1 = ref(type,i1);
		}
	}
//	confirm("HHV="+temp1)
	return temp1;
}

// SMA函数需要逐日累积计算，使用此函数的主函数需要在userfun中每日运行，例如KDJ, MACD等。
function SMA(name,val1,n,m) { // SMA(X,N,M):X的N日移动平均,M为权重,如Y=(X*M+Y'*(N-M))/N。 Y'表示上日Y.
	var key=name+n+" "+m
	var keya=name+n+"k"+m
	if (n<1 || n<m ) {
		return null
	}
//	confirm("1 sma1curi=", sma1curi[key])
	if(temp[key] === undefined  ) {
		temp[key] = val1 * m / n
	} else {
		if ( temp[keya] != curi ) {  // 检查本周期curi是否计算过，如果没有计算过，则计算一次，否则不计算。避免重复计算。
			temp[key] = (val1 * m + temp[key] * ( n - m ))/n;
			temp[keya] = curi
		}
	}
//	confirm("key="+key+", sma1curi="+sma1curi[key]+", "+sma1curi[keya])
	return temp[key];
}

function EMA(name,val1,n) { //  EMA(X,N)相当于SMA(X,N+1,2)
	return SMA("EMA"+name,val1,n+1,2);
//	confirm("val1="+val1)
}

function MEMA(name,val1,n) { //  MEMA(X,N)相当于SMA(X,N,1)
	return SMA("MEMA"+name,val1,n,1);
}

function CROSS(name,val1,val2) { //  CROSS(name,val1,val2)相当于val1交叉上穿val2，需要在userfun中每次运行保存日数据
	var cr1= false
	var cname="CROSS"+name
	if ( val1>=val2 && temp[cname]!== undefined && temp[cname][0]<temp[cname][1]) {
		var cr1=true
	}
	temp[cname]=[val1,val2]
	return cr1;
}

//	ref(close1,n)=n日前到收盘价 same as:  sellprice=p1[d1-n][close1] 
// MA(close1,n)=收盘价到n日平均价
var MACD = {
	SHORT:12,
	LONG:26,
	MID:9,
	DIF: function() {return EMA("DIF",ref(close1,0),this.SHORT)-EMA("DIF",ref(close1,0),this.LONG)},
	DEA: function() {return EMA("DEA",this.DIF(),this.MID)},
	MACD:function() {return (this.DIF()-this.DEA())*2}
}

var KDJ = {
	N:9,
	M1:3,
	M2:3,
	RSV:function() {
		//confirm("LLV="+LLV(low1,this.N)+" HHV="+HHV(high1,this.N)+" RSV="+(ref(close1,0)-LLV(low1,this.N))/(HHV(high1,this.N)-LLV(low1,this.N))*100); 
		return (ref(close1,0)-LLV(low1,this.N))/(HHV(high1,this.N)-LLV(low1,this.N))*100
		},
	K:function() {//confirm("K="+SMA("KDJ K",this.RSV(),this.M1,1));
		return SMA("KDJ K",this.RSV(),this.M1,1)
		},
	D:function() {return SMA("KDJ D",this.K(),  this.M2,1)},
	J:function() {return 3*this.K()-2*this.D()}
}
