// CR_SOLUTION.js

window.CR_SOLUTION = {
  "tables": {
    "CR_SOLUTION": {
      "description": "CR Solution results for the CR Solver run.",
      "columns": {
        "CR_SOLUTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_SOLUTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_PROJECT"
},
        "CR_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_SCENARIO"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start time of the CR Solver process."
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End time of the CR Solver process."
},
        "NUM_ITERATIONS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of solver iterations before the solution was produced."
},
        "NUM_LVFS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of LV Forecasts brought into the solution."
},
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total volume on the LV Forecasts brought into the solution."
},
        "NUM_CRS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of CR routes created in the solution."
},
        "CR_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total lane volume on the CR routes created by the solution."
},
        "CR_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total cost of the CRs created in the solution."
},
        "CR_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "CR_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total cost for the solution, including CR route cost and residual cost."
},
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "TOTAL_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "NUM_RESOURCES_USED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of fleet resources used for CR routes created in the solution."
},
        "AVG_CR_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average volume on CR routes created in the solution."
},
        "NUM_LVFS_ON_CRS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of LVFs at least partially covered by CR routes."
},
        "SAVINGS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total savings of the solution."
},
        "SAVINGS_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "SAVINGS_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SAVINGS_PERCENT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total savings compared with cost if every forecast were at market cost."
},
        "STATUS_CODE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Code indicating status of the CR solve."
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