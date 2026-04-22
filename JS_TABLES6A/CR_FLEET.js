// CR_FLEET.js

window.CR_FLEET = {
  "tables": {
    "CR_FLEET": {
      "columns": {
        "CR_FLEET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CR_FLEET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Fleet start depot location. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Fleet end depot location. "
        },
        "CR_CONSTRAINTS_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CR_CONSTRAINTS_DEF",
          "info": "Override constraints. "
        },
        "FIXED_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Fixed cost for unit CR volume. "
        },
        "FIXED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "FIXED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Min cost for unit CR volume. "
        },
        "MIN_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "MIN_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DISTANCE_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Distance cost for unit CR volume. "
        },
        "DISTANCE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "DISTANCE_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "UNIT_DISTANCE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Unit distance for the distance cost. "
        },
        "UNIT_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "UNIT_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "FREE_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Distance to ignore for per distance cost. "
        },
        "FREE_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "FREE_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DAILY_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Daily cost per unit CR volume (per calendar day)."
        },
        "DAILY_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "DAILY_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIP_GROUP_PROFILE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIP_GROUP_PROFILE_SET"
        },
        "FLEET_REGION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION_GROUP"
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
      "fk_tables": [
        "CR_ROUTE",
        "CR_SCENARIO_FLEET"
      ]
    }
  }
};
