import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

	vendasChart: Chart;
	clientesChart: Chart;
	rotulo = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio'];

	constructor() { }

	ngOnInit() {
		this.getVendasChart();
		this.getClientesChart();
	}

	getVendasChart(): void {
		let ctx = document.getElementById("vendasChart");
		let _data = this.getDados('vendas');
		this.vendasChart = this.createChart(ctx, 'line', _data);
	}

	getClientesChart(): void {
		let ctx = document.getElementById("clientesChart");
		let _data = this.getDados('clientes');
		this.clientesChart = this.createChart(ctx, 'bar', _data);
	}

	createChart(context: any, typeChart: string, data: any): Chart {
		return new Chart(context, {
			type: typeChart,
			data: {
				labels: this.rotulo,
				datasets: data,
				fill: false
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	}

	getDados(chart: string){
		if(chart == "vendas"){
			return this.getDadosVendas();
		} else if(chart == "clientes"){
			return this.getDadosClientes();
		}
	}

	getDadosVendas(){
		let data = [
			{
				data: [10, 32, 23, 40, 45],
				label: 'Quantidade de contratos firmados',
				borderColor: 'rgba(255, 33, 47,1)',
				borderWidth: 1,
				backgroundColor: 'rgba(255, 33, 47,1)',
				fill: false
			}
		];
		return data;
	}

	getDadosClientes(){
		let data = [
			{
				data: [10, 20, 30, 40, 50],
				label: 'Fidelização de Novos Clientes',
				backgroundColor: [
				'rgba(65, 129, 193, 1)',
				'rgba(65, 129, 193, 1)',
				'rgba(65, 129, 193, 1)',
				'rgba(65, 129, 193, 1)',
				'rgba(65, 129, 193, 1)'
				],
			}
		];
		return data;
	}

}
