// LNM_SHIPMENT_COST.js

window.LNM_SHIPMENT_COST = {
  "tables": {
    "LNM_SHIPMENT_COST": {
      "columns": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SHIPMENT_COST_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A system generated unique sequence number to define the  shipment costs. "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LNM_SHIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The cost as it releates to the cost type for the shipment. "
        },
        "COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "COST in base units. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ACCESSORIAL_CODE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "COST_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "C, A, B "
        },
        "IS_COST_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates shipment cost is a fixed cost. "
        },
        "PROCESS_AS_FLOW_THRU": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Override for record to be copied to the sell side during rating. "
        },
        "IS_WEIGHTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not the cost affects the total weighted cost of the shipment only "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used"
        },
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
