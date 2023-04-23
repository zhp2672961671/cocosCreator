package src;

// 定义子类覆写父类抽象方法
public class Tennis extends GameTemplate {

   @Override
   void init() {
      System.out.println("Tennis::init() [Tennis Game Initialized! Start playing.]");
   }

   @Override
   void start() {
      System.out.println("Tennis::start() [Tennis Game Started. Enjoy the game!]");
   }

   @Override
   void end() {
      System.out.println("Tennis::end() [Tennis Game Finished!]");
   }

   // 在调用父类play之前，如果要执行自己的行为，也可以覆盖父类方法
   // 先执行自己的，再调用父类的方法
   @Override
   public void play() {
      System.out.println("Tennis::play() [Tennis Game play!]");
      super.play();
   }
}