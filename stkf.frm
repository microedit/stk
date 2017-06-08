<form id=stkform>
请挑选买卖策略：<select name="conditionSTK"  id=conditionid onchange="changeCondition(this);" >
<option value=kdj >KDJ.J<0买，J>100卖</option>
<option value=buysell1 >区分上涨行情和下跌行情的连涨连跌策略</option>
<option value=downup >连跌4天买，连涨3天卖</option>
<option value=downup3 >连跌3天买，连涨3天卖</option>
<option value=crossup >连跌3天转升买，连涨3天转跌卖</option>
<option value=buysellpos >固定本金买</option>
</select><br>
<div id=condition1></div><br>
<button onclick="teststep(this)" >双参数步进测算</button>
<button onclick="timerbest()" >单参数最优测算</button>
<!-- <button onclick="bestall(this)" >单参数最优测算</button> -->
<button onclick="best2012(this)" >2012至今最佳参数</button>
<button onclick="best2015(this)" >2015最佳参数</button>
<button onclick="best2016(this)" >2016最佳参数</button>
<button onclick="best2016a(this)" >2016补充参数</button>
<table id=nday border=1>
<tr><td>大势</td><td>买入条件</td><td>卖出条件</td></tr>
<tr><td>
下跌行情:<br><input type=text name=ma1 size=2 value=6 />日均线低于<input type=text name=ma2 size=2 value=60 />日均线
<br>买入价=收盘价*<input type=text name=buyPriceRate  size=4 value=1.00 />
<br>卖出价=收盘价*<input type=text name=sellPriceRate size=4 value=0.98 />
</td><td>
1、连跌<input type=text name=buydays size=2 value=3 />天<br>
2、条件1补仓比例<input type=text name=rebuyrate size=3 value=0.85 /><br>
3、超跌无条件补仓比例<input type=text name=suprebuyrate size=3 value=0.7 /><br>
4、每次买入限额<input type=text name=maxbuyamount size=5 value=11000 /><br>
5、一种股票最大投入<input type=text name=maxcost size=5 value=50000 /><br>
</td><td>
1、连涨<input type=text name=selldays size=2 value=2 />天，并且价格涨到<input type=text name=minprofit size=5 value=1.03 />倍<br>
2、或者止盈<input type=text name=maxprofit size=5 value=1.5 />倍卖出<br>
3、或者止损<input type=text name=maxlost size=5 value=0.6 />倍卖出<br>
4、或者持仓超<input type=text name=maxdays size=2 value=60 />天，且连涨条件1的天数时，卖出<br>
</td></tr>
<tr><td>上涨行情:<br><input type=text name=uma1 size=2 value=6 />日均线高于<input type=text name=uma2 size=2 value=60 />日均线
<br>买入价=收盘价*<input type=text name=ubuyPriceRate  size=4 value=1.00 />
<br>卖出价=收盘价*<input type=text name=usellPriceRate size=4 value=0.98 /></td>
</td>
<td>
1、连跌<input type=text name=ubuydays size=2 value=5 />天<br>
2、条件1补仓比例<input type=text name=urebuyrate size=5 value=0.85 /><br>
3、超跌无条件补仓比例<input type=text name=usuprebuyrate size=5 value=0.7 /><br>
4、每次买入限额<input type=text name=umaxbuyamount size=5 value=11000 /><br>
5、一种股票最大投入<input type=text name=umaxcost size=5 value=20000 /><br>
</td><td>
1、连涨<input type=text name=uselldays size=2 value=2 />天，并且价格涨到<input type=text name=uminprofit size=5 value=0.96 />倍<br>
2、或者止盈<input type=text name=umaxprofit size=4 value=2 />倍卖出<br>
3、或者止损<input type=text name=umaxlost size=4 value=0.6 />倍卖出<br>
4、或者持仓超<input type=text name=umaxdays size=2 value=60 />天，且连涨条件1的天数时，卖出<br>
</td></tr>
</table>
开始日期：<input type=text name=strdate size=8 value="20170101" /> 买入费率：<input type=text name=buyfee size=6 value="0.125" />%，<br>
结束日期：<input type=text name=enddate size=8 value="20170819" /> 卖出费率：<input type=text name=sellfee size=6 value="0.125" />% <button onclick="today(this)">测试到今天</button><br>
<button onclick="dspfile(this)" >单股测算</button>证券交易所：<select name=market><option value=sh  selected=selected>上海</option><option value=sz>深圳</option></select>
测试股票：<input type=text name=stock value="600519" /> <span id="stkname"></span><br>
<button onclick="testpool(this)" >股票池测算</button><input type=text name=stkpool1 value="HS300.txt" /> 
分析输出目录：<input type=text name=path2 value="" /><br>
<button onclick="testdir(this)" >目录所有股测算</button>股票历史数据目录：<input type=text name=path1 value="..\stk\" /> 
<br>测算依据：价格类型:<select name=type1><option value=c  selected=selected>收盘价</option><option value=o >开盘价</option></select>
<br>
<button onclick="testcap(this)" >固定本金测算</button>投入本金:<input type=text name=capition value=1000000 /><br>
<br>
<input type=text name=binfile1 size=30 value="C:\new_gxzq_v6\vipdoc\sz\lday\sz000001.day" />
<button name=readtdx onclick="readbin(this.form.binfile1.value)" >直接读取通达信</button>
<div id=t1></div>
<select name=plan ><option value=nday selected=selected onselect="G(this.value).style='display:block';">连涨连跌策略</option><option value=BAIS  onselect="G('nday').style='display:none';">乖离率策略</option></select>
<br><button onclick="testHolding(this)" >持股测算</button><br>
<textarea name=stockholding cols=120 rows=3>//期初股票请填写在此处：sz/sh:股票代码:股数:成本价:买入日期
sh:600036:1000:18.10:20150810
sz:000001:1000:12.80:20150810</textarea>
<br><br><button onclick="testGXZQ(this)" >国信证券股份测算</button><br>
<textarea name=Gxzqholding cols=160 rows=3>
证券代码	证券名称	证券数量	可卖数量	今买数量	持仓成本价	买入均价	当前价	最新市值	持仓盈亏	盈亏比例(%)	冻结数量	股东代码	交易所名称
000046	泛海控股	1900	1900	0	10.7106	10.711	11.06	21014	663.87	3.26	0	0051961613	深圳A股
000543	皖能电力	1200	1200	0	8.5994	8.599	7.04	8448	-1871.23	-18.13	0	0051961613	深圳A股
</textarea>

<textarea name=result cols=120 rows=3> result will show in here </textarea>
</form>
<div id=svg1></div>
<div id=dsptot></div>
<div id="dspbil" ></div>
<div id=dsptrn></div>
