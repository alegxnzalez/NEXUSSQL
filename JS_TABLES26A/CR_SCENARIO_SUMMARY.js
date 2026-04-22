// CR_SCENARIO_SUMMARY.js

window.CR_SCENARIO_SUMMARY = {
  "tables": {
    "CR_SCENARIO_SUMMARY": {
      "description": "Solution summary information for a CR scenario.",
      "columns": {
        "CR_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_SCENARIO"
},
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_PROJECT"
},
        "NUM_LVFS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number of lane volume forecasts."
},
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total volume on all LVFs for this project."
},
        "NUM_CRS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number of CR Routes for this scenario."
},
        "CR_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total LVF volume covered by CR Routes for this scenario."
},
        "AVG_ROUTE_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Average volume on CR routes."
},
        "NUM_LVFS_ON_CRS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number of LVFs at least partially covered by CR routes for this scenario."
},
        "TOTAL_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total cost of the current solution."
},
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "TOTAL_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CR_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total cost of the CR routes for the scenario."
},
        "CR_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "CR_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "SAVINGS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Savings for the scenario over market cost."
},
        "SAVINGS_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "SAVINGS_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "SAVINGS_PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Savings as a percent of total market cost."
},
        "NUM_CMT_CRS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number of committed CR routes for this scenario."
},
        "CMT_CR_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total LVF volume covered by committed CR routes in this scenario."
},
        "AVG_CMT_ROUTE_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Average volume on committed CR routes."
},
        "NUM_LVFS_ON_CMT_CRS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number of lane volume forecasts at least partially covered by committed CR routes in this scenario."
},
        "TOTAL_CMT_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total cost of the scenario considering only the CR routes that are committed and corresponding residual costs."
},
        "TOTAL_CMT_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "TOTAL_CMT_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CMT_CR_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total cost of the of the committed CR routes in the scenario."
},
        "CMT_CR_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "CMT_CR_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CMT_SAVINGS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total savings for the scenario considering only committed CR routes."
},
        "CMT_SAVINGS_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "CMT_SAVINGS_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CMT_SAVINGS_PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Committed savings as a percent of total market cost."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};