import { MainService } from "./Main.service";

export default class UsuarioService extends MainService {
  constructor(url: string = "usuarios") {
    super(url);
  }

  public async obtenerTodos(params?: any): Promise<any> {
    return this.get("/all", params);
  }

  public async validarcuenta(data: any): Promise<any> {
    return this.post("/validar-cuenta", data);
  }

  public async enviarMailVerificacion(data: {abogadoId: number}): Promise<any> {
    return this.post("/enviar-mail-verificacion", data);
  }

  public async validarUsuarioPorAdmin(data: {abogadoId: number}): Promise<any> {
    return this.post("/validar-usuario-por-admin", data);
  }

  public async rechazarUsuarioPorAdmin(data: {abogadoId: number}): Promise<any> {
    return this.post("/rechazar-usuario-por-admin", data);
  }

  public async solicitudCambioContrasena(data: any): Promise<any> {
    return this.post("/solicitud-cambio-contrasena", data);
  }

  public async confirmarCambioContrasena(data: any): Promise<any> {
    return this.post("/confirmar-cambio-contrasena", data);
  }
}
