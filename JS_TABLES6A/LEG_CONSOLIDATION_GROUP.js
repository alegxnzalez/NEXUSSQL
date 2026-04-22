// LEG_CONSOLIDATION_GROUP.js

window.LEG_CONSOLIDATION_GROUP = {
  "tables": {
    "LEG_CONSOLIDATION_GROUP": {
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
        "LEG_CONSOLIDATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LEG_CONSOLIDATION_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LEG_CONSOLIDATION_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "SEQUENCING_FACTOR": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOGIC_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_SCENARIO"
        },
        "RES_SCH_LOGIC_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_SCENARIO"
        },
        "CAPACITY_LIMIT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CAPACITY_LIMIT_GROUP"
        },
        "AUTO_CONSOLIDATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "MULTISTOP INTO ONE EQUIP",
            "CONSOL INTO ONE SHIP MULTI EQUIP"
          ],
          "info": "Indicate how shipments on this leg consolidation group should be consolidated during network routine bulk plan. it takes 2 values: MULTISTOP INTO ONE EQUIP: consolidate shipment into multistop shipment with one equipment. CONSOL INTO ONE SHIP MULTI EQUIP: consolidate shipments into shipment with multiple equipment.  This only applies to shipments with 1 pickup and 1 delivery."
        }
      },
      "fk_tables": [
        "LEG",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_RELEASE_LEG_CONSTRAINT"
      ]
    }
  }
};
