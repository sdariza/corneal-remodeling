import { Microscope, FileText, Activity, Eye } from "lucide-react";
import { Card } from "../Card";
import { Label } from "../Label";
import { useState } from "react";
import { Input } from "../Input";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";
import { Slider } from "../Slider";
import Button from "../Button";
const Queratocono = () => {
    const [formData, setFormData] = useState({
        hc: "",
        ojo: "derecho",
        edad: 30,
        esfera: 0,
        astigmatismo: 0,
        eje: 90,
        tipoQueratocono: "grupo1",
        k1: 43,
        k2: 44,
        blancoBlanco: "11-13",
        camaraAnterior: 3.0,
        paquimetria: 500,
        ejeApex: 90,
    });
    const updateField = (field, value) => {
        setFormData({ ...formData, [field]: value })
    };
    const getColorForValue = (value, min, max) => {
        const percentage = ((value - min) / (max - min)) * 100
        if (percentage < 33) return "from-emerald-500 to-emerald-600"
        if (percentage < 66) return "from-amber-500 to-amber-600"
        return "from-rose-500 to-rose-600"
    }

    return (
        <>
            <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    <Microscope className="h-4 w-4" />
                    Análisis de Queratocono
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Diagnóstico Avanzado</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                    Ingrese los datos biométricos y clínicos para obtener un análisis preciso
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-6">
                    <Card className="p-6 bg-white/80 backdrop-blur border-slate-200/60 shadow-lg shadow-slate-200/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                                <FileText className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">Información del Paciente</h3>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <Label htmlFor="hc" className="text-sm font-medium text-slate-700 mb-2 block">
                                    Historia Clínica
                                </Label>
                                <Input
                                    id="hc"
                                    value={formData.hc}
                                    onChange={(e) => updateField("hc", e.target.value)}
                                    placeholder="Ingrese número de HC"
                                    className="bg-white border-slate-300"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <Label className="text-sm font-medium text-slate-700 mb-3 block">Ojo a evaluar</Label>
                                <RadioGroup
                                    value={formData.ojo}
                                    onValueChange={(value) => updateField("ojo", value)}
                                    className="flex gap-4"
                                >
                                    <div className="flex px-4 items-center space-x-2 flex-1">
                                        <RadioGroupItem value="izquierdo" id="izquierdo" />
                                        <Label htmlFor="izquierdo" className="cursor-pointer font-normal">
                                            Izquierdo
                                        </Label>
                                    </div>
                                    <div className="flex px-4 items-center space-x-2 flex-1">
                                        <RadioGroupItem value="derecho" id="derecho" />
                                        <Label htmlFor="derecho" className="cursor-pointer font-normal">
                                            Derecho
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Label className="text-sm font-medium text-slate-700">Edad del paciente</Label>
                                    <span className="text-lg font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                                        {formData.edad} años
                                    </span>
                                </div>
                                <div className="relative">
                                    <Slider
                                        value={[formData.edad]}
                                        onValueChange={([value]) => updateField("edad", value)}
                                        min={5}
                                        max={80}
                                        step={1}
                                        className="my-6"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>5 años</span>
                                        <span>80 años</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 bg-white/80 backdrop-blur border-slate-200/60 shadow-lg shadow-slate-200/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
                                <Activity className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">Refracción</h3>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <Label className="text-sm font-medium text-slate-700">Esfera</Label>
                                <span
                                    className={`text-lg font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${getColorForValue(formData.esfera, -15, 5)} text-white shadow-md`}
                                >
                                    {formData.esfera > 0 ? "+" : ""}
                                    {formData.esfera.toFixed(2)} D
                                </span>
                            </div>
                            <Slider
                                value={[formData.esfera]}
                                onValueChange={([value]) => updateField("esfera", value)}
                                min={-15}
                                max={5}
                                step={0.25}
                                className="my-6"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>-15 D</span>
                                <span className="text-emerald-600 font-medium">0 D</span>
                                <span>+5 D</span>
                            </div>
                            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full mt-2 opacity-30"></div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <Label className="text-sm font-medium text-slate-700">Astigmatismo</Label>
                                <span
                                    className={`text-lg font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${getColorForValue(Math.abs(formData.astigmatismo), 0, 10)} text-white shadow-md`}
                                >
                                    {formData.astigmatismo.toFixed(2)} D
                                </span>
                            </div>
                            <Slider
                                value={[formData.astigmatismo]}
                                onValueChange={([value]) => updateField("astigmatismo", value)}
                                min={-10}
                                max={0}
                                step={0.25}
                                className="my-6"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>-10 D</span>
                                <span>0 D</span>
                            </div>
                            <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full mt-2 opacity-30"></div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <Label className="text-sm font-medium text-slate-700">Eje</Label>
                                <span className="text-lg font-bold text-slate-900 bg-slate-100 px-4 py-1.5 rounded-lg">
                                    {formData.eje}°
                                </span>
                            </div>
                            <Slider
                                value={[formData.eje]}
                                onValueChange={([value]) => updateField("eje", value)}
                                min={0}
                                max={180}
                                step={1}
                                className="my-6"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2">
                                <span>0°</span>
                                <span>90°</span>
                                <span>180°</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="space-y-5">
                    <Card className="p-6 bg-white/80 backdrop-blur border-slate-200/60 shadow-lg shadow-slate-200/50">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6">Tipo de Queratocono</h3>

                        <RadioGroup
                            value={formData.tipoQueratocono}
                            onValueChange={(value) => updateField("tipoQueratocono", value)}
                            className="grid grid-cols-2 gap-4"
                        >
                            {["grupo1", "grupo2", "grupo3", "grupo4"].map((grupo) => (
                                <div key={grupo} className="relative">
                                    <RadioGroupItem value={grupo} id={grupo} className="peer sr-only" />
                                    <Label
                                        htmlFor={grupo}
                                        className="flex flex-col items-center justify-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-slate-50 transition-all"
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-2 flex items-center justify-center">
                                            <Eye className="h-8 w-8 text-slate-600" />
                                        </div>
                                        <span className="font-medium text-sm text-slate-900">
                                            {grupo.charAt(0).toUpperCase() + grupo.slice(1)}
                                        </span>
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </Card>
                    <Card className="p-6 bg-white/80 backdrop-blur border-slate-200/60 shadow-lg shadow-slate-200/50">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6">Queratometría</h3>

                        <div className="space-y-6">
                            {/* K1 */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Label className="text-sm font-medium text-slate-700">K1</Label>
                                    <span
                                        className={`text-lg font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${getColorForValue(formData.k1, 38, 60)} text-white shadow-md`}
                                    >
                                        {formData.k1.toFixed(2)} D
                                    </span>
                                </div>
                                <Slider
                                    value={[formData.k1]}
                                    onValueChange={([value]) => updateField("k1", value)}
                                    min={38}
                                    max={60}
                                    step={0.1}
                                    className="my-6"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>38 D</span>
                                    <span className="text-emerald-600 font-medium">Normal</span>
                                    <span>60 D</span>
                                </div>
                                <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full mt-2 opacity-30"></div>
                            </div>

                            {/* K2 */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Label className="text-sm font-medium text-slate-700">K2</Label>
                                    <span
                                        className={`text-lg font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${getColorForValue(formData.k2, 38, 60)} text-white shadow-md`}
                                    >
                                        {formData.k2.toFixed(2)} D
                                    </span>
                                </div>
                                <Slider
                                    value={[formData.k2]}
                                    onValueChange={([value]) => updateField("k2", value)}
                                    min={38}
                                    max={60}
                                    step={0.1}
                                    className="my-6"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>38 D</span>
                                    <span className="text-emerald-600 font-medium">Normal</span>
                                    <span>60 D</span>
                                </div>
                                <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full mt-2 opacity-30"></div>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 bg-white/80 backdrop-blur border-slate-200/60 shadow-lg shadow-slate-200/50">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6">Mediciones Adicionales</h3>

                        <div className="space-y-6">
                            {/* Blanco a Blanco */}
                            <div>
                                <Label className="text-sm font-medium text-slate-700 mb-3 block">Blanco a blanco</Label>
                                <RadioGroup
                                    value={formData.blancoBlanco}
                                    onValueChange={(value) => updateField("blancoBlanco", value)}
                                    className="grid grid-cols-2 gap-3"
                                >
                                    {["< 9 mm", "10-11 mm", "11-13 mm", "> 13 mm"].map((range) => (
                                        <div key={range} className="relative">
                                            <RadioGroupItem value={range} id={range} className="peer sr-only" />
                                            <Label
                                                htmlFor={range}
                                                className="flex items-center justify-center px-4 py-3 border-2 border-slate-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-slate-50 transition-all text-sm font-medium"
                                            >
                                                {range}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            {/* Cámara Anterior */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Label className="text-sm font-medium text-slate-700">Cámara Anterior</Label>
                                    <span
                                        className={`text-lg font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${getColorForValue(formData.camaraAnterior, 1.5, 4.5)} text-white shadow-md`}
                                    >
                                        {formData.camaraAnterior.toFixed(2)} mm
                                    </span>
                                </div>
                                <Slider
                                    value={[formData.camaraAnterior]}
                                    onValueChange={([value]) => updateField("camaraAnterior", value)}
                                    min={1.5}
                                    max={4.5}
                                    step={0.05}
                                    className="my-6"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>1.5 mm</span>
                                    <span>4.5 mm</span>
                                </div>
                                <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full mt-2 opacity-30"></div>
                            </div>

                            {/* Paquimetría */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Label className="text-sm font-medium text-slate-700">Paquimetría más delgada</Label>
                                    <span
                                        className={`text-lg font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${getColorForValue(formData.paquimetria, 300, 600)} text-white shadow-md`}
                                    >
                                        {formData.paquimetria} μm
                                    </span>
                                </div>
                                <Slider
                                    value={[formData.paquimetria]}
                                    onValueChange={([value]) => updateField("paquimetria", value)}
                                    min={300}
                                    max={600}
                                    step={5}
                                    className="my-6"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>300 μm</span>
                                    <span className="text-emerald-600 font-medium">Normal: 520-540 μm</span>
                                    <span>600 μm</span>
                                </div>
                                <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full mt-2 opacity-30"></div>
                            </div>

                            {/* Eje del Apex */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <Label className="text-sm font-medium text-slate-700">Eje del Apex</Label>
                                    <span className="text-lg font-bold text-slate-900 bg-slate-100 px-4 py-1.5 rounded-lg">
                                        {formData.ejeApex}°
                                    </span>
                                </div>
                                <Slider
                                    value={[formData.ejeApex]}
                                    onValueChange={([value]) => updateField("ejeApex", value)}
                                    min={0}
                                    max={360}
                                    step={1}
                                    className="my-6"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2">
                                    <span>0°</span>
                                    <span>180°</span>
                                    <span>360°</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="mt-12 flex justify-center">
                <Button
                    size="lg"
                    className="text-lg font-semibold px-5 py-2 rounded-lg border border-slate-300 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 text-slate-900 shadow-lg shadow-black/10 hover:from-slate-200 hover:via-slate-300 hover:to-slate-400 hover:shadow-xl hover:shadow-black/20 transition-all"
                    text="Generar Análisis Completo"
                />
            </div>
        </>
    )
}

export default Queratocono;