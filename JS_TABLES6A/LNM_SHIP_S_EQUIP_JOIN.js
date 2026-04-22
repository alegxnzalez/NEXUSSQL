// LNM_SHIP_S_EQUIP_JOIN.js

window.LNM_SHIP_S_EQUIP_JOIN = {
  "tables": {
    "LNM_SHIP_S_EQUIP_JOIN": {
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
          "nullable": false,
          "foreign_key": "LNM_S_EQUIPMENT"
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_EQUIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "CAPACITY_USAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PICKUP_STOP_NUM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The stop number where the equipment is picked up.  null if not picked up in this shipment. "
        },
        "DROPOFF_STOP_NUM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The stop number where the equipment is dropped off.  null if not dropped off in this shipment. "
        },
        "S_EQUIPMENT_INDEX": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "standing order of the equipment on the shipment"
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
