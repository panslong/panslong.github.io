import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as t,d as i}from"./app-de394487.js";const _={},l=i("<p>在默认情况下，RabbitMQ会将接收到的信息保存在内存中以降低消息收发的延迟。但在某些特殊情况下，这会导致消息积压，比如：</p><ul><li>消费者宕机或出现网络故障</li><li>消息发送量激增，超过了消费者处理速度</li><li>消费者处理业务发生阻塞</li></ul><p>一旦出现消息堆积问题，RabbitMQ的内存占用就会越来越高，直到触发内存预警上限。此时RabbitMQ会将内存消息刷到磁盘上，这个行为成为<code>PageOut</code>. <code>PageOut</code>会耗费一段时间，并且会阻塞队列进程。因此在这个过程中RabbitMQ不会再处理新的消息，生产者的所有请求都会被阻塞。</p><p>为了解决这个问题，从RabbitMQ的3.6.0版本开始，就增加了Lazy Queues的模式，也就是惰性队列。惰性队列的特征如下：</p><ul><li>接收到消息后直接存入磁盘而非内存</li><li>消费者要消费消息时才会从磁盘中读取并加载到内存（也就是懒加载）</li><li>支持数百万条的消息存储</li></ul><p>而在3.12版本之后，LazyQueue已经成为所有队列的默认格式。因此官方推荐升级MQ为3.12版本或者所有队列都设置为LazyQueue模式。</p><p>如果发生了堆积的问题，解决方案也所有很多的</p><p>第一:提高消费者的消费能力 ,可以使用多线程消费任务</p><p>第二：增加更多消费者，提高消费速度</p><p>​ 使用工作队列模式, 设置多个消费者消费消费同一个队列中的消息</p><p>第三：扩大队列容积，提高堆积上限</p><p>可以使用RabbitMQ惰性队列，惰性队列的好处主要是</p><p>①接收到消息后直接存入磁盘而非内存</p><p>②消费者要消费消息时才会从磁盘中读取并加载到内存</p><p>③支持数百万条的消息存储</p>",15),a=[l];function o(c,u){return p(),t("div",null,a)}const n=e(_,[["render",o],["__file","2022-08-21-消息堆积怎么处理？.html.vue"]]);export{n as default};
