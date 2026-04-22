// CR_LANE_COMMITMENT.js

window.CR_LANE_COMMITMENT = {
  "tables": {
    "CR_LANE_COMMITMENT": {
      "description": "Scenario-specific commitment data for lane volume forecasts.",
      "columns": {
        "CR_FORECAST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_FORECAST"
},
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
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total volume for the LV Forecast."
},
        "MARKET_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Per-unit market cost for the LV forecast."
},
        "MARKET_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
},
        "MARKET_COST_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CR_VOLUME_PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "CR volume as a percent of total volume"
},
        "CMT_CR_VOLUME_PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Committed CR volume as a percent of total volume."
},
        "CR_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "LVF volume covered by CR routes for this scenario."
},
        "CR_CONFIDENCE_FACTOR": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Forecast confidence factor at the CR volume."
},
        "CR_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Average per-unit volume allocated cost for this LV forecast on CR routes for this scenario."
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
        "CR_SAVINGS_PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "CR Leg savings as percent of market cost."
},
        "CMT_CR_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "LVF volume covered by committed CR routes for this scenario."
},
        "CMT_CR_CONFIDENCE_FACTOR": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Forecast confidence factor at the committed CR volume."
},
        "CMT_CR_COST": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Average per-unit volume allocated cost for this LV forecast on committed CR routes for this scenario."
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
        "CMT_CR_SAVINGS_PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Committed CR Leg savings as percent of market cost."
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