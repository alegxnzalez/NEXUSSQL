// CR_ROUTE_LEG.js

window.CR_ROUTE_LEG = {
  "tables": {
    "CR_ROUTE_LEG": {
      "columns": {
        "CR_ROUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_ROUTE"
        },
        "LEG_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true
        },
        "CR_FORECAST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CR_FORECAST",
          "info": "Null if this leg represents a depot stop "
        },
        "START_DAY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Start day number (depot arrival day if depot stop) "
        },
        "START_DOW": {
          "type": "NUMBER(1)",
          "nullable": true
        },
        "START_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Start time of day (in seconds).  (Depot arrival time for depot start.) "
        },
        "START_PERIOD": {
          "type": "NUMBER()",
          "nullable": true
        },
        "START_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "Start region (null if this leg is a depot stop) "
        },
        "START_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Depot location ID if this is a depot stop (null otherwise). "
        },
        "END_DAY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "End day number (depot departure day if depot stop) "
        },
        "END_DOW": {
          "type": "NUMBER(1)",
          "nullable": true
        },
        "END_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "End time of day (in seconds).  (Depot departure time for depot start.) "
        },
        "END_PERIOD": {
          "type": "NUMBER()",
          "nullable": true
        },
        "END_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "End region (null if this leg is a depot stop) "
        },
        "END_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Depot location ID if this is a depot stop (null otherwise). "
        },
        "NEXT_LEG_DEADHEAD": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Distance from this leg's destination region to the next leg's source region (or to the fleet depot if the next leg is a depot stop). "
        },
        "NEXT_LEG_DEADHEAD_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "NEXT_LEG_DEADHEAD_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "ALLOCATED_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Cost allocated to this leg from the CR route cost."
        },
        "ALLOCATED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "ALLOCATED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
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
