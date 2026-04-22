// I_TRANSMISSION.js

window.I_TRANSMISSION = {
  "tables": {
    "I_TRANSMISSION": {
      "columns": {
        "I_TRANSMISSION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The I_TRANSMISSION_NO column uniquely identifies the transmission. "
        },
        "TRANSMISSION_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "CREATE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The CREATE_DATE column specifies when the transmission was first created. "
        },
        "TRANSACTION_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The TRANSACTION_COUNT column specifies the number of transactions associated with this transmission. "
        },
        "SENDER_HOST_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The SENDER_HOST_NAME column specifies the name of the machine that sent the transmission. "
        },
        "RECEIVER_HOST_NAME": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The SENDER_HOST_NAME column specifies the name of the machine that received the transmission. "
        },
        "USERNAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The USERNAME column specifies the GLog username used to log into GLog to persist the transmission. This is required when IS_INBOUND is Y. "
        },
        "PASSWORD": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The PASSWORD column specifies the GLog password used to log into GLog to persist the transmission. This is required when "
        },
        "IS_INBOUND": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "The IS_INBOUND column indicates that a transmission is either inbound (value equals Y) or not (value equals N). "
        },
        "SENDER_TRANSMISSION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The SENDER_TRANSMISSION_NO column specifies the transmission number that the sender assigned to the transmission. "
        },
        "SENDER_TRANSMISSION_ID": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "REFERENCE_TRANSMISSION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The REFERENCE_TRANSMISSION_NO column can be used when GLog responds to a prior transmission. In this case, it specifies to which transmission the response belongs. "
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The STATUS column is set to FRESH when the transmission is first stored in the I_TRANSMISSION table. Currently, it is never being changed to anything else. "
        },
        "RUN_NEW_DOMAIN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "ACK_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "The ACK_COM_METHOD_GID column may be set to EMAIL to request email acknowledgement of a transmission. "
        },
        "ACK_EMAIL_ADDRESS": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The ACK_EMAIL_ADDRESS column holds the valid email address to which a transmission acknowledgement gets sent if email is set in the ACK_COM_METHOD_GID column. "
        },
        "ACK_EMAIL_SMTPHOST": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The ACK_EMAIL_SMTPHOST column specifies the hostname to send an email acknowledegment of receipt of the transmission. "
        },
        "ACK_SERVLET_URL": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The URL for sending teh acknowledgement. "
        },
        "XML_BLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "The XML_BLOB column specifies the entire XML text of the transmission. "
        },
        "XML_PI": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "This field contains the XML Processing Instructions. "
        },
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM"
        },
        "REQUESTING_USER": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IS_PROCESS_IN_SEQUENCE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "RETRY_COUNT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "ACK_OPTION": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "ERROR",
            "NO",
            "YES"
          ]
        },
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER"
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE"
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT"
        },
        "EXT_SYS_COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Indicates the communication method used for outbound XML Transmissions. "
        },
        "EXT_SYS_COM_INFO": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "This field specifies the attributes of the external system communication method used for the outbound integration.  For example, when the comm method is FTP, this column would contain the filename. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4. "
        },
        "STOP_PROCESS_ON_ERROR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if processing of the Transmission should be stopped when an error occurs in a Transaction. "
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Process ID for the Transmission. "
        },
        "XML_BLOB_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "T",
            "TH",
            "NA",
            "B",
            "M",
            "MH",
            "MB"
          ],
          "info": "Specifies if the contents of the XML_BLOB is the complete Transmission XML(T), the Transmission Header(TH), Message XML(M), Message Header XML(MH), Message Body XML(MB) or is not used (NA). "
        },
        "ADD_XML_DECLARATION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the XML declaration should be added when sending the XML. "
        },
        "ADD_TRANSMISSION_WRAPPER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission XML element should be used to wrap the individual Transaction elements. "
        },
        "TRANSMISSION_WRAPPER_ELEMENT": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the element name to wrap the Transmission. "
        },
        "XML_BLOB_SIZE": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Specifies the size of the XML. "
        },
        "EXTERNAL_STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the external status for the Transmission.  The external status represents the result of processing at the external system. "
        },
        "FIRST_ATTEMPT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Specifies the first time an attempt is made to process the transmission. "
        },
        "LAST_ATTEMPT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Specifies the last time an attempt is made to process the transmission. "
        },
        "SOURCE_METHOD": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "I_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
        "MIME_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Describes the XML_BLOB content. "
        },
        "VERSION": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Specifies the app version which corresponds to the XML_BLOB."
        },
        "USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_ROLE"
        }
      },
      "fk_tables": []
    }
  }
};
