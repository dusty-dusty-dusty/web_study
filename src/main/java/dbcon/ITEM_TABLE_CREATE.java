package dbcon;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/*
	@전송객체
	
		- Statement				  : SQL 문장 완성된 경우
		- PreparedStatement (***) : SQL 문장 미완성된 경우
		- CallableStatement		  : 데이터베이스함수(function/procedure) 호출 때 //보안, 

	@전송
		- [int] 	  executeUpdate() : INSERT, DELETE, UPDATE, DDL
		- [ResultSet] executeQuery()  : SELECT
		

*/

public class ITEM_TABLE_CREATE {
	
	static String driver 	= "oracle.jdbc.driver.OracleDriver";
	static String url 		= "jdbc:oracle:thin:@127.0.0.01:1521:xe";
	static String user 		= "scott";
	static String pass		= "tiger";
	
	public static void main(String[] args) {
		
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			//1. 
			Class.forName(driver);
//			Class.forName("oracle.jdbc.driver.OracleDriver");
			
			//2. 연결객체
			con = DriverManager.getConnection(url, user, pass);
			
			//3. SQL 문장

			
			String sql = "CREATE TABLE item"
					+ " ("
					+ " NO NUMBER(20) PRIMARY KEY,"
					+ " NAME varchar2(200),"
					+ " ITEM varchar2(200),"
					+ " CONTENT varchar2(200),"
					+ " STARS varchar2(200)"
					+ " )";
			
			//4. 전송객체
			ps = con.prepareStatement(sql);
			
			//5. 전송
			int result = ps.executeUpdate();
			System.out.println(result+"행을 수행하였습니다.");
			//[6.결과받아처리]
			
		} catch (Exception e) {
			System.out.println("실패 : "+ e.getMessage() );
			e.printStackTrace(); //구체적으로
		}finally {
			//7.
			try { 
				con.close();
				ps.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
			
		}
	}

}
