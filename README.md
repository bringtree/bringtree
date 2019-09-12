个人简介

- 姓名: 黄培松  
- 性别: 男
- github: [bringtree的github / 记录了平时遇到的一些问题的博客](https://github.com/bringtree/question_embedding/issues)
- 常用编程语言: py|js|cpp
- 邮箱: bringtree@qq.com
- 电话: 15813318311
- 学历: 华南农业大学-本科生(计算机科学与技术)  2020.7毕业.

学习/工作情况:

- 2019.3 - 现在: 网易有道-语音算法实习生 
- 2018.11 - 2019.3: CVTE中央研究院-nlp实习生 (主要做检索式问答机器人的工作)
- 2018.3 - 现在: SIGSDS实验室 (主要在任务型对话系统的工作)
- 2017.3 - 2017.10: 红满堂工作室-web开发

论文经历

- **Peisong Huang**, Peijie Huang, Wencheng Ai, et al. Latent Topic Attention for Domain Classification. Proceedings of the 20th Annual Conference of the International Speech Communication Association (INTERSPEECH 2019), 2019, to appear, oral.(已经收到中了的通知)
- **黄培松**, 黄沛杰, 丁健德, 等. 基于隐含主题协同注意力网络的领域分类方法. 中文信息学报 (已经收到中了的通知)
- 梁泳诗, 黄沛杰, **黄培松**, 等.基于可靠词汇语义约束的词语向量表达修正研究. 中文信息学报, 2019, 33(1):58-69.  主要思路:是借助外在的词典来解决词向量同义词和反义词在维度上比较相似的问题.

比赛经历:

- 2018.5-2018.7中文人机对话技术评测用户意图领域分类比赛(排名:4/80).属于短句分类.由于测试集和训练集来自不同数据分布.所以主要是在词向量做了一些特征的补充.
- 2018.4-2018.5 NLPCC 2018 共享任务4子任务2意图识别(排名:4/195)(前三是搜狗,北京大学,CVTE.).由于数据集的标签很多会依赖到上文的句子,所以最后提交的模型是HierarchicalAttentionNetwork.

工作经历:

- 在网易有道(kaldi,rasa,hadoop): 
	-  在网易有道,做类似overlap的分类任务（三分类），同时在kaldi上复现 SpecAugment (远远早于kaldi官方公开的时间,另外实现方式也和kaldi公开的方式不同), 期间修复了kaldi 的一些:bug https://github.com/kaldi-asr/kaldi/pull/3304 https://github.com/kaldi-asr/kaldi/pull/3341。针对kaldi格式开发一些可视化工具。
	-  在网易有道,做从HDFS上导出语音日志的筛选分析工作。在hadoop上完成数据的统计,并提取出一些数据在线下使用kaldi训练.评估数据质量。
	-  用无监督方法来提取新闻(很长的文本) 的一些关键字,并做了一些实体去重的工作,并对常见attention模型在长文本分类上的attention稳定性做了一些实验.
	-  用rasa搭建对话系统。
	
- 在CVTE中央研究院(tensorflow,scrapy-redis):
	- 使用srcapy-redis爬取百度相似问答对来构造闲聊语料库。并用修改全连接层softmax和分类的阈值的方法改进用于人事部门的一个二分类模型的召回率。
	- 优化完线上问答机器人(微信公众号:希沃学院)的性能(主要是:用户反馈的解决率).主要是在做检索式的问答匹配.由于数据类别极多,极其不均匀.而且这个任务是个度量问题(其实是当做分类问题来做的时候 效果极差)，于是将模型转化成一个聚类模型，其中特征抽取用深度模型    (dynamic_w2c+cnn+lstm+attention)来做。目前已将模型的top3从0.46提升到 0.76,同时有能保证较快的运算时间.


- 在校期间(vue,nodejs,angular):
	- 2017.3-2017.9: 期间在做web开发.使用Koa+Vue开发学校团委的实时投票系统(背景:因为需要现场投票表决,参与投票人数很多，需要大量志愿者反复确认计票)和重构一个angular编写的森林防火的web应用.

