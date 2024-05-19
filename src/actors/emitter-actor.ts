
import { Actor, BaseActor, VisualEffect } from "@hology/core/gameplay";
import { Parameter } from "@hology/core/shader/parameter";

@Actor()
class EmitterActor extends BaseActor {

  @Parameter()
  vfx: VisualEffect

  onInit(): void | Promise<void> {
  }

  onBeginPlay() {

  }

  onEndPlay() {

  }

  onUpdate(deltaTime: number) {

  } 

}

export default EmitterActor
