const data = {
    "Codigo de Producto": [
        { label: 'Caja de Ahorro $', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Caja de Ahorro USD', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Cuenta Corriente $', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Cuenta Corriente USD', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Préstamo Personal Francés', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Préstamo Personal Francés Bonificado', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Préstamo Hipotecario', value: Math.floor(Math.random() * 901) + 100 },
    ],
    "Ingresos": [
        { label: 'Saldo Promedio del mes proceso', value: Math.floor(Math.random() * 4001) + 1000 },
        { label: 'Saldo del día', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'N° de días del mes de proceso', value: Math.floor(Math.random() * 4) + 28 },
        { label: 'Intereses + reajustes por cobrar al cierre de mes incluye los tramos de mora', value: Math.floor(Math.random() * 401) + 100 },
        { label: 'Pagos: Intereses + reajustes pagados en el mes', value: Math.floor(Math.random() * 251) + 50 },
        { label: 'Intereses penales', value: Math.floor(Math.random() * 41) + 10 },
        { label: 'Tasa cliente', value: (Math.random() * (0.05 - 0.01) + 0.01).toFixed(2) },
        { label: 'Tasa de Costo de Fondo', value: (Math.random() * (0.05 - 0.01) + 0.01).toFixed(2) },
        { label: 'Mes de proceso en palabras', value: 'Noviembre' },
        { label: 'Moneda', value: 'USD' },
        { label: 'Numero de dias del mes', value: Math.floor(Math.random() * 4) + 28 },
        { label: 'Tasa Cobrada', value: (Math.random() * (0.1 - 0.01) + 0.01).toFixed(2) },
    ],
    'Egresos': [
        { label: 'Saldo promedio en Moneda de origen', value: Math.floor(Math.random() * 5001) + 1000 },
        { label: 'Interés por cobrar en Moneda de origen', value: Math.floor(Math.random() * 1001) + 100 },
        { label: 'Paridad de término', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Paridad de inicio', value: Math.floor(Math.random() * 901) + 100 },
        { label: 'Ndiyear: 360 o 361 si es año bisiesto', value: Math.floor(Math.random() * 2) + 360 },
        { label: 'Comisiones', value: Math.floor(Math.random() * 501) + 100 },
        { label: 'Seguros', value: Math.floor(Math.random() * 501) + 100 },
        { label: 'Impuestos', value: Math.floor(Math.random() * 501) + 100 },
    ],
    'Formulas': [
        { label: 'Sistema Francés', value: 'Fórmula del Sistema Francés' },
        { label: 'Sistema Alemán', value: 'Fórmula del Sistema Alemán' },
        { label: 'Hipotecarios', value: 'Fórmula de Préstamos Hipotecarios' },
    ]
};

export default data;
