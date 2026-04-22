// CR_ROUTE.js

window.CR_ROUTE = {
  "tables": {
    "CR_ROUTE": {
      "columns": {
        "CR_ROUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CR_ROUTE_XID": {
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
        "CR_FLEET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_FLEET"
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Volume in number of shipments per leg. "
        },
        "ORIGINAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Volume assigned by CR Solver "
        },
        "UNIT_COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Per unit-volume cost. "
        },
        "UNIT_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "UNIT_COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "UNIT_SAVINGS": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Per unit-volume savings. "
        },
        "UNIT_SAVINGS_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "UNIT_SAVINGS_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SAVINGS_PERCENT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "% savings over market cost. "
        },
        "CONFIDENCE_FACTOR": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Confidence factor (%) based upon constituent forecast leg confidence factors and scenario volumes. "
        },
        "COMMITTED_CONFIDENCE_FACTOR": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Confidence factor (%) based upon constituent forecast leg confidence factors and scenario commitments. "
        },
        "DURATION": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Duration of the CR Route. "
        },
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "DURATION_BASE": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "LOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "LOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "LOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DEADHEAD_DISTANCE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "DEADHEAD_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "DEADHEAD_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "IS_FEASIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates feasibility based upon scenario and fleet constraints. "
        },
        "IS_COMMITTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether the CR route has been committed by the user. "
        },
        "IS_USER_EDITED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether the CR route has been edited by the user. "
        },
        "IS_UNPROCESSED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether the CR route has been processed to determine distances and costs."
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
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": [
        "CR_ROUTE_INFEASIBILITY",
        "CR_ROUTE_LEG",
        "CR_ROUTE_REFNUM",
        "CR_ROUTE_REMARK"
      ]
    }
  }
};
